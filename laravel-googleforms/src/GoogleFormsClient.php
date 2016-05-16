<?php
    /**
     * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
     *
     * @copyright (C)Copyright 2016 elmar.eatech.org
     *               Date: 2/15/16
     *               Time: 3:26 PM
     */

    namespace Akaramires\GoogleForms;

    use Google_Client;
    use Google_Service_Script;
    use Google_Service_Script_ExecutionRequest;

    class GoogleFormsClient
    {
        protected $script_id = false;

        /** @var Google_Client $client */
        private $client = null;

        private static $app_name = 'Laravel Google Forms';
        private static $scopes   = 'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/forms https://www.googleapis.com/auth/script.external_request';

        public function __construct()
        {
            $this->script_id = config('googleforms.script_id');

            $this->initClient();
        }

        private function initClient()
        {
            $clientSecretFile = storage_path(config('googleforms.config_file'));
            $tokenFile = storage_path(config('googleforms.token_file'));

            $token = \File::get($tokenFile);

            $this->client = new Google_Client();
            $this->client->setApplicationName(self::$app_name);
            $this->client->setScopes(self::$scopes);
            $this->client->setAuthConfigFile($clientSecretFile);
            $this->client->setAccessType('offline');
            $this->client->setApprovalPrompt('force');
            $this->client->setAccessToken($token);

            try {
                if ($this->client->isAccessTokenExpired()) {
                    $this->refreshToken($token);
                }
            } catch (GoogleFormsException $e) {
                $this->refreshToken($token);
            }
        }

        private function refreshToken($accessToken)
        {
            $tokenFile = storage_path(config('googleforms.token_file'));

            $token = json_decode($accessToken);

            $this->client->refreshToken($token->refresh_token);
            $receivedAccessToken = json_decode($this->client->getAccessToken());

            $token->access_token = $receivedAccessToken->access_token;
            $token->created = $receivedAccessToken->created;
            $token->last_update = strtotime('now');

            $token = json_encode($token);

            \File::get($tokenFile, $token);

            $this->client->setAccessToken($token);
        }

        protected function execute($function_name, $parameters = [])
        {
            $client = $this->client;
            $service = new Google_Service_Script($client);

            $errMsg = 'Change a few things up and try submitting again.';

            try {
                $request = new Google_Service_Script_ExecutionRequest();
                $request->setDevMode(true);
                $request->setParameters($parameters);
                $request->setFunction($function_name);

                $response = $service->scripts->run($this->script_id, $request);

                if ($response->getError()) {
                    $error = $response->getError()['details'][0];

                    throw new GoogleFormsException($error['errorMessage']);
                } else {
                    $responseData = $response->getResponse();

                    if (array_key_exists('result', $responseData)) {
                        return $responseData['result'];
                    }
                }
            } catch (GoogleFormsException $e) {
                $errMsg = $e->getMessage();
            }

            return [
                'status'  => false,
                'message' => $errMsg,
            ];
        }
    }
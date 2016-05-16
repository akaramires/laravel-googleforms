<?php
    /**
     * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
     *
     * @copyright (C)Copyright 2016 elmar.eatech.org
     *               Date: 2/15/16
     *               Time: 3:26 PM
     */

    namespace Akaramires\GoogleForms\Forms;

    use Akaramires\GoogleForms\Forms\Items\Item;
    use Akaramires\GoogleForms\GoogleFormsClient;
    use Akaramires\GoogleForms\GoogleFormsException;

    class GoogleForm extends GoogleFormsClient
    {
        const FORM_RESPONSES  = 'FormResponses';
        const FORM_DEBUG      = 'FormDebug';
        const FORM_APP_HELPER = 'FormAppHelper';
        const FORM_HELPER     = 'FormHelper';
        const BATCH_REQUEST   = 'BatchRequest';

        const ENDPOINT_EMBED = 'https://docs.google.com/forms/d/%s/viewform?embedded=true';

        protected $form_id = false;

        public function setFormId($form_id)
        {
            $this->form_id = $form_id;
        }

        public function getFormId()
        {
            return $this->form_id;
        }

        public function createForm($params = [], $returnOnlyParams = false)
        {
            $requestParams = [
                'method' => 'create',
                'params' => $params,
            ];

            if ($returnOnlyParams) {
                return [
                    'function_name' => self::FORM_APP_HELPER,
                    'parameters'    => $requestParams,
                ];
            }

            return $this->execute(self::FORM_APP_HELPER, $requestParams);
        }

        public function getForm()
        {
            return $this->execute(self::FORM_APP_HELPER, [
                'method' => 'findById',
                'params' => [
                    'form_id' => $this->getFormId(),
                ],
            ]);
        }

        public function debug($formId)
        {
            return $this->execute(self::FORM_DEBUG, [
                'form_id' => $formId,
            ]);
        }

        public function getResponses($formIdOrIds)
        {
            if (!is_array($formIdOrIds)) {
                $formIdOrIds = [$formIdOrIds];
            }

            return $this->execute(self::FORM_RESPONSES, [
                'form_ids' => $formIdOrIds,
            ]);
        }

        public function getElements()
        {
            $request = $this->execute(self::FORM_HELPER, [
                'method' => 'getElements',
                'params' => [
                    'form_id' => $this->getFormId(),
                ],
            ]);

            try {
                if ($request['status']) {
                    if (sizeof($request['data'])) {
                        $elements = [];

                        foreach ($request['data'] as $element) {
                            $className = 'Akaramires\GoogleForms\Forms\Items\\' . self::toCamelCase($element['type'], true) . 'Item';

                            /** @var Item $itemClass */
                            $itemClass = new $className($element);

                            $elements[] = $itemClass->getData();
                        }

                        return $elements;
                    }
                } else {
                    throw new GoogleFormsException($request['message']);
                }
            } catch (GoogleFormsException $e) {
                Log::error($e->getMessage());
            }

            return [];
        }

        public function cleanupForm($elements_ids, $returnOnlyParams = false)
        {
            $elements_ids = array_map('intval', array_filter($elements_ids));

            $requestParams = [
                'method' => 'deleteElements',
                'params' => [
                    'form_id' => $this->getFormId(),
                    'ids'     => $elements_ids,
                ],
            ];

            if ($returnOnlyParams) {
                return [
                    'function_name' => self::FORM_HELPER,
                    'parameters'    => $requestParams,
                ];
            }

            return $this->execute(self::FORM_HELPER, $requestParams);
        }

        public function createOrUpdateElement(Item $element, $returnOnlyParams = false)
        {
            $requestParams = [
                'method' => 'createElement',
                'params' => array_merge(
                    [
                        'form_id' => $this->getFormId(),
                        'type'    => constant(get_class($element) . '::TYPE'),
                    ],
                    $element->getData()
                ),
            ];

            if ($returnOnlyParams) {
                return [
                    'function_name' => self::FORM_HELPER,
                    'parameters'    => $requestParams,
                ];
            }

            return $this->execute(self::FORM_HELPER, $requestParams);
        }

        public function batchRequest($params)
        {
            return $this->execute(self::BATCH_REQUEST, $params);
        }

        public static function toCamelCase($str, $capitalise_first_char = false)
        {
            $str = strtolower($str);
            if ($capitalise_first_char) {
                $str[0] = strtoupper($str[0]);
            }
            $func = create_function('$c', 'return strtoupper($c[1]);');
            return preg_replace_callback('/_([a-z])/', $func, $str);
        }
        public static function toUnderscore($str)
        {
            $str = strtolower($str);
            $func = create_function('$c', 'return "_" . strtolower($c[1]);');
            return preg_replace_callback('/([A-Z])/', $func, $str);
        }
    }
<?php
    /**
     * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
     *
     * @copyright (C)Copyright 2016 elmar.eatech.org
     *               Date: 2/10/16
     *               Time: 3:45 PM
     */

    namespace App\Helpers;

    use Exception;
    use Google_Service_Script;
    use Google_Service_Script_ExecutionRequest;
    use Illuminate\Mail\Message;
    use Log;
    use Mail;

    class GoogleFormHelper
    {
        const SCRIPT_ID = 'xxxxxxxxxxxx';

        const ELEMENT_CHECKBOX        = 'CHECKBOX';
        const ELEMENT_DATE            = 'DATE';
        const ELEMENT_DATETIME        = 'DATETIME';
        const ELEMENT_DURATION        = 'DURATION';
        const ELEMENT_GRID            = 'GRID';
        const ELEMENT_IMAGE           = 'IMAGE';
        const ELEMENT_LIST            = 'LIST';
        const ELEMENT_MULTIPLE_CHOICE = 'MULTIPLE_CHOICE';
        const ELEMENT_PAGE_BREAK      = 'PAGE_BREAK';
        const ELEMENT_PARAGRAPH_TEXT  = 'PARAGRAPH_TEXT';
        const ELEMENT_SCALE           = 'SCALE';
        const ELEMENT_SECTION_HEADER  = 'SECTION_HEADER';
        const ELEMENT_TEXT            = 'TEXT';
        const ELEMENT_TIME            = 'TIME';

        const PAGENAV_CONTINUE   = 'CONTINUE';
        const PAGENAV_GO_TO_PAGE = 'GO_TO_PAGE';
        const PAGENAV_RESTART    = 'RESTART';
        const PAGENAV_SUBMIT     = 'SUBMIT';

        const DESCTINATION_SPREADSHEET = 'SPREADSHEET';

        const ALIGN_LEFT   = 'LEFT';
        const ALIGN_CENTER = 'CENTER';
        const ALIGN_RIGHT  = 'RIGHT';

        private function __construct()
        {
        }

        public static function getFormResponses($form_url)
        {
            $parameters = [
                'form_url' => $form_url,
            ];

            return self::__request('getResponses', $parameters);
        }

        public static function getElements($form_id)
        {
            try {
                $parameters = [
                    'form_id' => $form_id,
                ];

                return self::__request('createElements', $parameters);
            } catch (Exception $e) {
                Log::error($e->getMessage());

                return false;
            }
        }
    }
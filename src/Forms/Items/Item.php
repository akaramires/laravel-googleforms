<?php
    /**
     * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
     *
     * @copyright (C)Copyright 2016 elmar.eatech.org
     *               Date: 2/15/16
     *               Time: 3:26 PM
     */

    namespace Akaramires\GoogleForms\Forms\Items;

    use Akaramires\GoogleForms\Forms\Enums\ItemTypeEnum;
    use Akaramires\GoogleForms\GoogleScriptException;
    use App\Helpers\StringHelper;

    abstract class Item
    {
        const TYPE = ItemTypeEnum::TYPE_COMMON;

        protected $local_id = 0;

        protected $index = 0;

        protected $id = 0;

        protected $title = '';

        protected $help_text = '';

        protected $required = false;

        public function __construct($element = [])
        {
            if (sizeof($element)) {
                foreach ($element as $key => $value) {
                    try {
                        $method = 'set' . StringHelper::toCamelCase($key, true);

                        if (method_exists($this, $method)) {
                            $this->$method($value);
                        }
                    } catch (GoogleScriptException $e) {
                    }
                }
            }
        }

        /**
         * @return int
         */
        public function getLocalId()
        {
            return (int)$this->local_id;
        }

        /**
         * @param int $local_id
         */
        public function setLocalId($local_id)
        {
            $this->local_id = (int)$local_id;
        }

        /**
         * @return int
         */
        public function getIndex()
        {
            return (int)$this->index;
        }

        /**
         * @param int $index
         */
        public function setIndex($index)
        {
            $this->index = (int)$index;
        }

        /**
         * @return int
         */
        public function getId()
        {
            return (int)$this->id;
        }

        /**
         * @param int $id
         */
        public function setId($id)
        {
            $this->id = (int)$id;
        }

        /**
         * @return string
         */
        public function getTitle()
        {
            return $this->title;
        }

        /**
         * @param string $title
         */
        public function setTitle($title)
        {
            $this->title = $title;
        }

        /**
         * @return string
         */
        public function getHelpText()
        {
            return $this->help_text;
        }

        /**
         * @param string $help_text
         */
        public function setHelpText($help_text)
        {
            $this->help_text = $help_text;
        }

        /**
         * @return boolean
         */
        public function isRequired()
        {
            return (boolean)$this->required;
        }

        /**
         * @param boolean $required
         */
        public function setRequired($required)
        {
            $this->required = (boolean)$required;
        }

        public function getData()
        {
            return get_object_vars($this);
        }
    }
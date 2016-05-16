<?php

    /**
     * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
     *
     * @copyright (C)Copyright 2016 elmar.eatech.org
     *               Date: 2/16/16
     *               Time: 1:05 PM
     */

    namespace Akaramires\GoogleForms\Forms\Items;

    use Akaramires\GoogleForms\Forms\Enums\ItemTypeEnum;

    class ChoiceItem extends Item
    {
        const TYPE = ItemTypeEnum::TYPE_COMMON;

        protected $choice_values = [];

        protected $has_other_option = false;

        /**
         * @return array
         */
        public function getChoiceValues()
        {
            return $this->choice_values;
        }

        /**
         * @param array $choice_values
         */
        public function setChoiceValues($choice_values)
        {
            $this->choice_values = array_values($choice_values);
        }

        /**
         * @return boolean
         */
        public function isHasOtherOption()
        {
            return (boolean)$this->has_other_option;
        }

        /**
         * @param boolean $has_other_option
         */
        public function setHasOtherOption($has_other_option)
        {
            $this->has_other_option = (boolean)$has_other_option;
        }
    }
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

    class DateTimeItem extends Item
    {
        const TYPE = ItemTypeEnum::TYPE_DATETIME;

        protected $includes_year = false;

        /**
         * @return boolean
         */
        public function isIncludesYear()
        {
            return $this->includes_year;
        }

        /**
         * @param boolean $includes_year
         */
        public function setIncludesYear($includes_year)
        {
            $this->includes_year = $includes_year;
        }
    }
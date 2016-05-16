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

    class GridItem extends Item
    {
        const TYPE = ItemTypeEnum::TYPE_GRID;

        protected $columns = [];

        protected $rows = [];

        /**
         * @return array
         */
        public function getColumns()
        {
            return $this->columns;
        }

        /**
         * @param array $columns
         */
        public function setColumns($columns)
        {
            $this->columns = array_values($columns);
        }

        /**
         * @return array
         */
        public function getRows()
        {
            return $this->rows;
        }

        /**
         * @param array $rows
         */
        public function setRows($rows)
        {
            $this->rows = array_values($rows);
        }


    }
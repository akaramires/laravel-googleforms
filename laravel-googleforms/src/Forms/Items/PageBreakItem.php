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

    class PageBreakItem extends Item
    {
        const TYPE = ItemTypeEnum::TYPE_PAGE_BREAK;

        protected $page_navigation_type;

        /**
         * @return mixed
         */
        public function getPageNavigationType()
        {
            return $this->page_navigation_type;
        }

        /**
         * @param mixed $page_navigation_type
         */
        public function setPageNavigationType($page_navigation_type)
        {
            $this->page_navigation_type = $page_navigation_type;
        }
    }
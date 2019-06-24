<?php
/**
 * @author Elmar Abdurayimov <e.abdurayimov@gmail.com>
 * @copyright 2019 laravel-googleforms
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
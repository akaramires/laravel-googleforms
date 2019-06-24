<?php
/**
 * @author Elmar Abdurayimov <e.abdurayimov@gmail.com>
 * @copyright 2019 laravel-googleforms
 */

namespace Akaramires\GoogleForms\Forms\Items;

use Akaramires\GoogleForms\Forms\Enums\ItemTypeEnum;

class DateItem extends Item
{
    const TYPE = ItemTypeEnum::TYPE_DATE;

    protected $includes_year = false;

    /**
     * @return boolean
     */
    public function isIncludesYear()
    {
        return (boolean) $this->includes_year;
    }

    /**
     * @param boolean $includes_year
     */
    public function setIncludesYear($includes_year)
    {
        $this->includes_year = (boolean) $includes_year;
    }
}
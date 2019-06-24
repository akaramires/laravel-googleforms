<?php
/**
 * @author Elmar Abdurayimov <e.abdurayimov@gmail.com>
 * @copyright 2019 laravel-googleforms
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
        return (boolean) $this->has_other_option;
    }

    /**
     * @param boolean $has_other_option
     */
    public function setHasOtherOption($has_other_option)
    {
        $this->has_other_option = (boolean) $has_other_option;
    }
}
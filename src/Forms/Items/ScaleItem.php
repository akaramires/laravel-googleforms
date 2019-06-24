<?php
/**
 * @author Elmar Abdurayimov <e.abdurayimov@gmail.com>
 * @copyright 2019 laravel-googleforms
 */

namespace Akaramires\GoogleForms\Forms\Items;

use Akaramires\GoogleForms\Forms\Enums\ItemTypeEnum;

class ScaleItem extends Item
{
    const TYPE = ItemTypeEnum::TYPE_SCALE;

    protected $left_label = '';

    protected $right_label = '';

    protected $lower_bound = 0;

    protected $upper_bound = 0;

    /**
     * @return string
     */
    public function getLeftLabel()
    {
        return $this->left_label;
    }

    /**
     * @param string $left_label
     */
    public function setLeftLabel($left_label)
    {
        $this->left_label = $left_label;
    }

    /**
     * @return string
     */
    public function getRightLabel()
    {
        return $this->right_label;
    }

    /**
     * @param string $right_label
     */
    public function setRightLabel($right_label)
    {
        $this->right_label = $right_label;
    }

    /**
     * @return int
     */
    public function getLowerBound()
    {
        return $this->lower_bound;
    }

    /**
     * @param int $lower_bound
     */
    public function setLowerBound($lower_bound)
    {
        $this->lower_bound = $lower_bound;
    }

    /**
     * @return int
     */
    public function getUpperBound()
    {
        return $this->upper_bound;
    }

    /**
     * @param int $upper_bound
     */
    public function setUpperBound($upper_bound)
    {
        $this->upper_bound = $upper_bound;
    }
}
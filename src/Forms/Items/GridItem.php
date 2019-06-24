<?php
/**
 * @author Elmar Abdurayimov <e.abdurayimov@gmail.com>
 * @copyright 2019 laravel-googleforms
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
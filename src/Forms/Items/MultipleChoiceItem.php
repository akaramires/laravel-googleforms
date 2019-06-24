<?php
/**
 * @author Elmar Abdurayimov <e.abdurayimov@gmail.com>
 * @copyright 2019 laravel-googleforms
 */

namespace Akaramires\GoogleForms\Forms\Items;

use Akaramires\GoogleForms\Forms\Enums\ItemTypeEnum;

class MultipleChoiceItem extends ChoiceItem
{
    const TYPE = ItemTypeEnum::TYPE_MULTIPLE_CHOICE;
}
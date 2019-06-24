<?php
/**
 * @author Elmar Abdurayimov <e.abdurayimov@gmail.com>
 * @copyright 2019 laravel-googleforms
 */

namespace Akaramires\GoogleForms\Forms\Enums;

use Akaramires\GoogleForms\Base\Enums\Enum;

class ItemTypeEnum extends Enum
{
    const TYPE_COMMON          = 'UNDEFINED';
    const TYPE_CHECKBOX        = 'CHECKBOX';
    const TYPE_DATE            = 'DATE';
    const TYPE_DATETIME        = 'DATETIME';
    const TYPE_DURATION        = 'DURATION';
    const TYPE_GRID            = 'GRID';
    const TYPE_IMAGE           = 'IMAGE';
    const TYPE_LIST            = 'LIST';
    const TYPE_MULTIPLE_CHOICE = 'MULTIPLE_CHOICE';
    const TYPE_PAGE_BREAK      = 'PAGE_BREAK';
    const TYPE_PARAGRAPH_TEXT  = 'PARAGRAPH_TEXT';
    const TYPE_SCALE           = 'SCALE';
    const TYPE_SECTION_HEADER  = 'SECTION_HEADER';
    const TYPE_TEXT            = 'TEXT';
    const TYPE_TIME            = 'TIME';
    const TYPE_VIDEO           = 'VIDEO';
}
<?php
/**
 * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
 *
 * @copyright (C)Copyright 2016 elmar.eatech.org
 *               Date: 2/16/16
 *               Time: 1:39 PM
 */

namespace Akaramires\GoogleForms\Forms\Enums;

use Akaramires\GoogleForms\Base\Enums\Enum;

class PageNavigationTypeEnumEnum extends Enum
{
    const NAV_CONTINUE   = 'CONTINUE';
    const NAV_GO_TO_PAGE = 'GO_TO_PAGE';
    const NAV_RESTART    = 'RESTART';
    const NAV_SUBMIT     = 'SUBMIT';
}
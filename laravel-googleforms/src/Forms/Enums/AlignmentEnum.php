<?php

    /**
     * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
     *
     * @copyright (C)Copyright 2016 elmar.eatech.org
     *               Date: 2/16/16
     *               Time: 1:36 PM
     */
    namespace Akaramires\GoogleForms\Forms\Enums;

    use Akaramires\GoogleForms\Base\Enums\Enum;

    class AlignmentEnum extends Enum
    {
        const ALIGN_LEFT   = 'LEFT';
        const ALIGN_CENTER = 'CENTER';
        const ALIGN_RIGHT  = 'RIGHT';

        public static function all()
        {
            return [
                self::ALIGN_LEFT   => self::ALIGN_LEFT,
                self::ALIGN_CENTER => self::ALIGN_CENTER,
                self::ALIGN_RIGHT  => self::ALIGN_RIGHT,
            ];
        }
    }
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

    class ImageItem extends Item
    {
        const TYPE = ItemTypeEnum::TYPE_IMAGE;

        protected $alignment;

        protected $image_url;

        /**
         * @return mixed
         */
        public function getAlignment()
        {
            return $this->alignment;
        }

        /**
         * @param mixed $alignment
         */
        public function setAlignment($alignment)
        {
            $this->alignment = $alignment;
        }

        /**
         * @return mixed
         */
        public function getImageUrl()
        {
            return $this->image_url;
        }

        /**
         * @param mixed $image_url
         */
        public function setImageUrl($image_url)
        {
            $this->image_url = $image_url;
        }
    }
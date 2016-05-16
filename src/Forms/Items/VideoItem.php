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

    class VideoItem extends Item
    {
        const TYPE = ItemTypeEnum::TYPE_VIDEO;

        protected $alignment;

        protected $video_url;

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
        public function getVideoUrl()
        {
            return $this->video_url;
        }

        /**
         * @param mixed $video_url
         */
        public function setVideoUrl($video_url)
        {
            $this->video_url = $video_url;
        }
    }
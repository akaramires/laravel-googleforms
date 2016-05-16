<?php
    /**
     * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
     *
     * @copyright (C)Copyright 2016 elmar.eatech.org
     *               Date: 1/19/16
     *               Time: 3:10 PM
     */

    namespace Akaramires\GoogleForms;

    use Akaramires\GoogleForms\Forms\GoogleForm;
    use Illuminate\Support\ServiceProvider;

    class GoogleFormsServiceProvider extends ServiceProvider
    {
        /**
         * Indicates if loading of the provider is deferred.
         *
         * @var bool
         */
        protected $defer = true;

        protected $commands = [
            'Akaramires\GoogleForms\Commands\GenerateTokenCommand',
        ];

        /**
         * Bootstrap the application services.
         *
         * @return void
         */
        public function boot()
        {
            $this->publishes([
                __DIR__ . '/../config/googleforms.php' => config_path('googleforms.php'),
            ]);
        }

        /**
         * Register the application services.
         *
         * @return void
         */
        public function register()
        {
            $this->mergeConfigFrom(__DIR__ . '/../config/googleforms.php', 'googleforms');

            $this->commands($this->commands);

            $this->app->singleton('GoogleForm', function ($app) {
                return new GoogleForm();
            });
        }

        /**
         * Get the services provided by the provider.
         *
         * @return array
         */
        public function provides()
        {
            return [];
        }
    }
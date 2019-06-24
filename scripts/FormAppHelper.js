function FormAppHelper() {
    var args = arguments[0];

    var methods = {
        /**
         * Create new form
         */
        create: function (params) {
            try {
                var form = null;

                try {
                    form = FormApp.openById(params.form_id);
                } catch(err) {
                    form = FormApp.create(params.title);

                    var fileName = 'ENV' + params.env
                        + '__ID' + params.id
                        + '__UID' + params.user_id
                        + '__PID' + params.product_id
                        + '__CID' + params.campaign_id;

                    var fileDescription = 'ENV' + params.env
                        + '__ID-' + params.id
                        + '__UID-' + params.user_id
                        + '__UFNAME-' + params.user_first_name
                        + '__ULNAME-' + params.user_last_name
                        + '__UUSERNAME-' + params.user_username
                        + '__UEMAIL-' + params.user_email

                        + '__PID-' + params.product_id
                        + '__PNAME-' + params.product_name

                        + '__CID-' + params.campaign_id
                        + '__CNAME-' + params.campaign_name;

                    moveFormToFolderForm(DriveApp.getFileById(form.getId()), fileName, fileDescription);
                }

                form.setTitle(params.title);

                try {
                    form.setAcceptingResponses(params.accepting_responses);
                } catch(err) {
                }

                try {
                    form.setDescription(params.description);
                } catch(err) {
                }

                try {
                    form.setProgressBar(params.show_progress);
                } catch(err) {
                }

                try {
                    form.setLimitOneResponsePerUser(params.limit_one_response_per_user);
                } catch(err) {
                }

                try {
                    form.setShuffleQuestions(params.shuffle_questions);
                } catch(err) {
                }

                try {
                    form.setConfirmationMessage(params.confirmation_message);
                } catch(err) {
                }

                try {
                    if (!params.limit_one_response_per_user) {
                        form.setShowLinkToRespondAgain(params.show_link_to_respond_again);
                    }
                } catch(err) {
                }

                try {
                    form.setPublishingSummary(params.publish_and_show);
                } catch(err) {
                }

                try {
                    form.setAllowResponseEdits(params.allow_response_edits);
                } catch(err) {
                }

                return this.findById({form_id: form.getId()});
            } catch(err) {
                return {
                    status:  false,
                    message: err.message
                };
            }
        },

        /**
         * Fetch full form info
         */
        fetchInfo: function (form) {
            var info = {};

            for (var key in form) {
                try {
                    if (key.substring(0, 3) == 'get') {
                        info[key.replace(/([a-z])([A-Z])/g, '$1_$2').replace('get_', '').toLowerCase()] = form[key]();
                    }
                } catch(err) {
                }
            }

            return info;
        },

        /**
         * Find form by ID
         */
        findById: function (params) {
            try {
                var form = FormApp.openById(params.form_id);
            } catch(err) {
                return {
                    status: false,
                    message: err.message
                };
            }

            return {
                status: true,
                data: this.fetchInfo(form)
            };
        },

        /**
         * Find form by URL
         */
        findByUrl: function (params) {
            try {
                var form = FormApp.openByUrl(params.form_url);
            } catch(err) {
                return {
                    status: false,
                    message: err.message
                };
            }

            return {
                status: true,
                data: this.fetchInfo(form)
            };
        }
    };

    return methods[args.method](args.params);
}
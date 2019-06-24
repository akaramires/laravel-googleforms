function FormDebug() {
    var args = arguments[0];
    var requestResponse = {};

    try {
        if (args.form_id) {
            var form_id = args.form_id;

            var form = FormApp.openById(form_id);
            var formResponses = form.getResponses();

            requestResponse[form_id] = {};

            for (var i = 0; i < formResponses.length; i++) {
                var formResponse = formResponses[i];
                var itemResponses = formResponse.getItemResponses();

                Logger.log("+" + formResponse.getRespondentEmail() + "+");
                Logger.log(formResponse.getRespondentEmail().toString());

                var responsesPerUser = [];

                for (var j = 0; j < itemResponses.length; j++) {
                    var itemResponse = itemResponses[j];

                    responsesPerUser.push({
                        id: itemResponse.getItem().getId(),
                        question: itemResponse.getItem().getTitle()
                    });
                }

                requestResponse[form_id][formResponse.getId()] = responsesPerUser;
            }
        } else {
            throw new Error('Form ID was not found!');
        }

        return {
            status: true,
            data: requestResponse
        };
    } catch(err) {
        return {
            status: false,
            message: err.message
        };
    }
}

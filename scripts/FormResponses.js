/**
 * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
 * @copyright (C)Copyright 2016 elmar.eatech.org
 * Date: 2/24/16
 * Time: 4:49 PM
 */

function getFormResponses() {
    var args = arguments[0];

    if (args.form_url == undefined) {
        return {
            status: false,
            message: 'Undefined Form URL'
        };
    }

    try {
        var form = FormApp.openByUrl(args.form_url);
        var formResponses = form.getResponses();
        var responses = [];

        for (var i = 0; i < formResponses.length; i++) {
            var formResponse = formResponses[i];
            var itemResponses = formResponse.getItemResponses();

            for (var j = 0; j < itemResponses.length; j++) {
                var itemResponse = itemResponses[j];

                responses.push({
                    id: itemResponse.getItem().getId(),
                    type: itemResponse.getItem().getType(),
                    question: itemResponse.getItem().getTitle(),
                    answer: itemResponse.getResponse()
                });
            }
        }

        return {
            status: true,
            data: responses
        };
    } catch(err) {
        return {
            status: false,
            message: err.message
        };
    }
}

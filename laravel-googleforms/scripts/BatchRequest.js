/**
 * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
 * @copyright (C)Copyright 2016 elmar.eatech.org
 * Date: 2/25/16
 * Time: 2:52 PM
 */

function BatchRequest() {
    var args = arguments[0];
    var response = {
        form: null,
        cleanup: null,
        fields: {}
    };

    if (args.hasOwnProperty('form')) {
        response.form = this[args.form.function_name](args.form.parameters);

        if (!response.form.status) {
            return response;
        }

        var form_id = response.form.data.id;

        if (args.hasOwnProperty('cleanup')) {
            args.cleanup.parameters.params.form_id = form_id;

            response.cleanup = this[args.cleanup.function_name](args.cleanup.parameters);
        }

        if (args.hasOwnProperty('fields') && args.fields.length) {
            for (var i in args.fields) {
                var field = args.fields[i];

                field.parameters.params.form_id = form_id;

                response.fields[field.parameters.params.local_id] = this[field.function_name](field.parameters);
            }
        }
    }

    return response;
}

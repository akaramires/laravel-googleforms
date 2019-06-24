function FormResponses() {
    var args            = arguments[ 0 ];
    var requestResponse = {};

    try {
        if( args.form_ids && args.form_ids.length ) {
            for( var index in args.form_ids ) {
                var form_id = args.form_ids[ index ];

                var form          = FormApp.openById( form_id );
                var formResponses = form.getResponses();

                requestResponse[ form_id ] = {};

                for( var i = 0; i < formResponses.length; i++ ) {
                    var formResponse  = formResponses[ i ];
                    var itemResponses = formResponse.getItemResponses();

                    var responsesPerUser = [];

                    for( var j = 0; j < itemResponses.length; j++ ) {
                        var itemResponse = itemResponses[ j ];

                        responsesPerUser.push( {
                            id      : itemResponse.getItem().getId(),
                            type    : itemResponse.getItem().getType().toString(),
                            question: itemResponse.getItem().getTitle(),
                            answer  : itemResponse.getResponse()
                        } );

                        Logger.log( itemResponse.getResponse() );
                    }

                    requestResponse[ form_id ][ formResponse.getId() ] = responsesPerUser;
                }
            }
        } else {
            throw new Error( 'Form IDs was not found!' );
        }

        return {
            status: true,
            data  : requestResponse
        };
    } catch( err ) {
        return {
            status : false,
            message: err.message
        };
    }
}

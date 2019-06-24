function FormHelper() {
    var args = arguments[ 0 ];

    var methods = {
        /**
         * Get form element
         */
        getElement: function( item ) {
            var responseItem = {
                index    : 0,
                id       : 0,
                title    : '',
                type     : FormApp.ItemType.TEXT,
                help_text: '',
                required : false
            };

            if( item == null ) {
                return responseItem;
            }

            try {
                responseItem.index = item.getIndex();
            } catch( err ) {
            }

            try {
                responseItem.id = item.getId();
            } catch( err ) {
            }

            try {
                responseItem.title = item.getTitle();
            } catch( err ) {
            }

            try {
                responseItem.type = item.getType().toString();
            } catch( err ) {
            }

            try {
                responseItem.help_text = item.getHelpText();
            } catch( err ) {
            }

            var asItem;

            switch( item.getType().toString().toUpperCase() ) {
                case FormApp.ItemType.DURATION:
                case FormApp.ItemType.SECTION_HEADER:
                    break;

                case 'TEXT':
                    try {
                        asItem = item.asTextItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch( err ) {
                    }
                    break;

                case 'PARAGRAPH_TEXT':
                    try {
                        asItem = item.asParagraphTextItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch( err ) {
                    }
                    break;

                case 'CHECKBOX':
                    try {
                        asItem = item.asCheckboxItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch( err ) {
                    }

                    responseItem.choices = [];

                    try {
                        if( asItem.getChoices().length ) {
                            for( var j = 0; j < asItem.getChoices().length; j++ ) {
                                responseItem.choices.push( asItem.getChoices()[ j ].getValue() );
                            }
                        }
                    } catch( err ) {
                    }

                    try {
                        responseItem.has_other_option = asItem.hasOtherOption();
                    } catch( err ) {
                        responseItem.has_other_option = false;
                    }
                    break;

                case 'DATE':
                    try {
                        asItem = item.asDateItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.includes_year = asItem.includesYear();
                    } catch( err ) {
                        responseItem.includes_year = false;
                    }

                    break;

                case 'DATETIME':
                    try {
                        asItem = item.asDateTimeItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.includes_year = asItem.includesYear();
                    } catch( err ) {
                        responseItem.includes_year = false;
                    }

                    break;

                case 'GRID':
                    try {
                        asItem = item.asGridItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.columns = asItem.getColumns();
                    } catch( err ) {
                        responseItem.columns = [];
                    }

                    try {
                        responseItem.rows = asItem.getRows();
                    } catch( err ) {
                        responseItem.rows = [];
                    }

                    break;

                case 'IMAGE':
                    try {
                        asItem = item.asImageItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.alignment = asItem.getAlignment().toString() || FormApp.Alignment.LEFT.toString();
                    } catch( err ) {
                        responseItem.alignment = FormApp.Alignment.LEFT.toString();
                    }

                    try {
                        responseItem.width = asItem.getWidth();
                    } catch( err ) {
                        responseItem.width = 0;
                    }

                    try {
                        var image = asItem.getImage();

                        responseItem.content_type   = image.getContentType();
                        responseItem.name           = image.getName();
                        responseItem.is_google_type = image.isGoogleType();
                        responseItem.data_as_string = 'data:' + image.getContentType() + ';base64,' + Utilities.base64Encode( image.getBytes() );
                    } catch( err ) {
                        responseItem.content_type   = false;
                        responseItem.name           = '';
                        responseItem.is_google_type = true;
                        responseItem.data_as_string = '';
                    }

                    break;

                case 'LIST':
                    try {
                        asItem = item.asListItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch( err ) {
                    }

                    responseItem.choices = [];

                    try {
                        if( asItem.getChoices().length ) {
                            for( var j = 0; j < asItem.getChoices().length; j++ ) {
                                responseItem.choices.push( asItem.getChoices()[ j ].getValue() );
                            }
                        }
                    } catch( err ) {
                    }
                    break;

                case 'MULTIPLE_CHOICE':
                    try {
                        asItem = item.asMultipleChoiceItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch( err ) {
                    }

                    responseItem.choices = [];

                    try {
                        if( asItem.getChoices().length ) {
                            for( var j = 0; j < asItem.getChoices().length; j++ ) {
                                responseItem.choices.push( asItem.getChoices()[ j ].getValue() );
                            }
                        }
                    } catch( err ) {
                    }

                    try {
                        responseItem.has_other_option = asItem.hasOtherOption();
                    } catch( err ) {
                        responseItem.has_other_option = false;
                    }

                    break;

                case 'PAGE_BREAK':
                    try {
                        asItem = item.asPageBreakItem();
                    } catch( err ) {
                        asItem = item;
                    }


                    try {
                        responseItem.page_navigation_type = asItem.getPageNavigationType().toString();
                    } catch( err ) {
                        responseItem.page_navigation_type = FormApp.PageNavigationType.CONTINUE;
                    }

                    break;

                case 'SCALE':
                    try {
                        asItem = item.asScaleItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch( err ) {
                    }

                    try {
                        responseItem.left_label = asItem.getLeftLabel();
                    } catch( err ) {
                        responseItem.left_label = '';
                    }

                    try {
                        responseItem.right_label = asItem.getRightLabel();
                    } catch( err ) {
                        responseItem.right_label = '';
                    }

                    try {
                        responseItem.lower_bound = asItem.getLowerBound();
                    } catch( err ) {
                        responseItem.lower_bound = 0;
                    }

                    try {
                        responseItem.upper_bound = asItem.getUpperBound();
                    } catch( err ) {
                        responseItem.upper_bound = 100;
                    }
                    break;

                case 'TIME':
                    try {
                        asItem = item.asTimeItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch( err ) {
                    }
                    break;

                case 'VIDEO':
                    try {
                        asItem = item.asVideoItem();
                    } catch( err ) {
                        asItem = item;
                    }

                    try {
                        responseItem.alignment = asItem.getAlignment().toString() || FormApp.Alignment.LEFT.toString();
                    } catch( err ) {
                        responseItem.alignment = FormApp.Alignment.LEFT.toString();
                    }

                    try {
                        responseItem.width = asItem.getWidth();
                    } catch( err ) {
                        responseItem.width = 0;
                    }
                    break;
            }

            return responseItem;
        },

        /**
         * Get form elements
         */
        getElements: function( params ) {
            try {
                var form = FormApp.openById( params.form_id );
            } catch( err ) {
                return {
                    status : false,
                    message: err.message
                };
            }

            var response = {
                status: true,
                data  : []
            };

            var formItems = form.getItems();

            if( formItems.length ) {
                for( var i = 0; i < formItems.length; i++ ) {
                    var item = formItems[ i ];

                    var responseItem = this.getElement( item );

                    response.data.push( responseItem );
                }
            }

            return response;
        },

        /**
         * Get form elements by multiple forms
         */
        getElementsByMultipleForms: function( params ) {
            var response = {};

            var form;

            if( params.forms_ids.length ) {
                for( var idIndex = 0; idIndex < params.forms_ids.length; idIndex++ ) {
                    var formId = params.forms_ids[ idIndex ];

                    response[ formId ] = {
                        status: true,
                        form  : {},
                        fields: []
                    };

                    try {
                        form = FormApp.openById( formId );

                        try {
                            response[ formId ].form.show_progress = form.hasProgressBar();
                        } catch( err ) {
                            response[ formId ].form.show_progress = false;
                        }

                        try {
                            response[ formId ].form.only_one_response = form.hasLimitOneResponsePerUser();
                        } catch( err ) {
                            response[ formId ].form.only_one_response = false;
                        }

                        try {
                            response[ formId ].form.show_link_to_another = form.hasRespondAgainLink();
                        } catch( err ) {
                            response[ formId ].form.show_link_to_another = false;
                        }

                        try {
                            response[ formId ].form.can_edit_response = form.canEditResponse();
                        } catch( err ) {
                            response[ formId ].form.can_edit_response = false;
                        }

                        for( var key in form ) {
                            try {
                                if( key.substring( 0, 3 ) == 'get' ) {
                                    response[ formId ].form[ key.replace( /([a-z])([A-Z])/g, '$1_$2' ).replace( 'get_', '' ).toLowerCase() ] = form[ key ]();
                                }
                            } catch( err ) {
                            }
                        }

                        var formItems = form.getItems();

                        if( formItems.length ) {
                            for( var i = 0; i < formItems.length; i++ ) {
                                var item = formItems[ i ];

                                var responseItem = this.getElement( item );

                                response[ formId ].fields.push( responseItem );
                            }
                        }
                    } catch( err ) {
                        response[ formId ] = {
                            status : false,
                            message: err.message
                        };
                    }
                }
            }

            return response;
        },

        /**
         * Create element
         */
        createElement: function( params ) {
            try {
                var form = FormApp.openById( params.form_id );
            } catch( err ) {
                return {
                    status : false,
                    message: err.message
                };
            }

            var element = null;

            if( params.id > 0 ) {
                element = form.getItemById( params.id );
            }

            if( !element ) {
                element = form[ 'add' + toCamelCase( params.type, 1 ) + 'Item' ]();
            } else {
                form.moveItem( element, params.index );

                element = element[ 'as' + toCamelCase( params.type, 1 ) + 'Item' ]();
            }

            for( var key in params ) {
                try {
                    switch( key ) {
                        case 'form_id':
                        case 'id':
                        case 'type':
                        case 'index':
                        case 'local_id':
                            break;

                        case 'lower_bound':
                        case 'upper_bound':
                            element.setBounds( params.lower_bound, params.upper_bound );
                            break;

                        case 'left_label':
                        case 'right_label':
                            element.setLabels( params.left_label, params.right_label );
                            break;

                        case 'has_other_option':
                            element.showOtherOption( params[ key ] );
                            break;

                        case 'alignment':
                            element.setAlignment( FormApp.Alignment[ params[ key ] ] );
                            break;

                        case 'image_url':
                            var img = UrlFetchApp.fetch( params.image_url );

                            element.setImage( img );
                            break;

                        default:
                            element[ 'set' + toCamelCase( key, 1 ) ]( params[ key ] );
                            break;
                    }
                } catch( err ) {
                    Logger.log( err.message );
                }
            }

            return {
                status: true,
                data  : this.getElement( element )
            };
        },

        /**
         * Delete elements
         */
        deleteElements: function( params ) {
            try {
                var form = FormApp.openById( params.form_id );
            } catch( err ) {
                return {
                    status : false,
                    message: err.message
                };
            }

            var formItems = form.getItems();
            if( formItems.length ) {
                for( var i = 0; i < formItems.length; i++ ) {
                    var item = formItems[ i ];
                    if( params.ids.indexOf( item.getId() ) < 0 ) {
                        form.deleteItem( item );
                    }
                }
            }

            return {
                status : true,
                message: 'Successfully elements removed.'
            };
        }
    };

    return methods[ args.method ]( args.params );
}

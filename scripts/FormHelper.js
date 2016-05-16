/**
 * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
 * @copyright (C)Copyright 2016 elmar.eatech.org
 * Date: 2/16/16
 * Time: 5:57 PM
 */

function FormHelper() {
    var args = arguments[0];

    var methods = {
        /**
         * Get form element
         */
        getElement: function (item) {
            var responseItem = {
                index: 0,
                id: 0,
                title: '',
                type: FormApp.ItemType.TEXT,
                help_text: '',
                required: false
            };

            if (item == null) {
                return responseItem;
            }

            try {
                responseItem.index = item.getIndex();
            } catch(err) {
            }

            try {
                responseItem.id = item.getId();
            } catch(err) {
            }

            try {
                responseItem.title = item.getTitle();
            } catch(err) {
            }

            try {
                responseItem.type = item.getType().toString();
            } catch(err) {
            }

            try {
                responseItem.help_text = item.getHelpText();
            } catch(err) {
            }

            var asItem;

            switch(item.getType().toString()) {
                case FormApp.ItemType.PARAGRAPH_TEXT:
                case FormApp.ItemType.DURATION:
                case FormApp.ItemType.SECTION_HEADER:
                    break;

                case FormApp.ItemType.TEXT:
                    asItem = item.asTextItem();

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch(err) {
                    }
                    break;

                case FormApp.ItemType.CHECKBOX:
                    asItem = item.asCheckboxItem();

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch(err) {
                    }

                    responseItem.choices = [];

                    try {
                        if (asItem.getChoices().length) {
                            for (var j = 0; j < asItem.getChoices().length; j++) {
                                responseItem.choices.push(asItem.getChoices()[j].getValue());
                            }
                        }
                    } catch(err) {
                    }

                    try {
                        responseItem.has_other_option = asItem.hasOtherOption();
                    } catch(err) {
                        responseItem.has_other_option = false;
                    }
                    break;

                case FormApp.ItemType.DATE:
                    asItem = item.asDateItem();

                    try {
                        responseItem.includes_year = asItem.includesYear();
                    } catch(err) {
                        responseItem.includes_year = false;
                    }

                    break;

                case FormApp.ItemType.DATETIME:
                    asItem = item.asDateTimeItem();

                    try {
                        responseItem.includes_year = asItem.includesYear();
                    } catch(err) {
                        responseItem.includes_year = false;
                    }

                    break;

                case FormApp.ItemType.GRID:
                    asItem = item.asGridItem();

                    try {
                        responseItem.columns = asItem.getColumns();
                    } catch(err) {
                        responseItem.columns = [];
                    }

                    try {
                        responseItem.rows = asItem.getRows();
                    } catch(err) {
                        responseItem.rows = [];
                    }

                    break;

                case FormApp.ItemType.IMAGE:
                    asItem = item.asImageItem();

                    try {
                        responseItem.alignment = asItem.getAlignment().toString() || FormApp.Alignment.LEFT.toString();
                    } catch(err) {
                        responseItem.alignment = FormApp.Alignment.LEFT.toString();
                    }

                    try {
                        responseItem.width = asItem.getWidth();
                    } catch(err) {
                        responseItem.width = 0;
                    }

                    try {
                        var image = asItem.getImage();

                        responseItem.content_type = image.getContentType();
                        responseItem.name = image.getName();
                        responseItem.is_google_type = image.isGoogleType();
                        responseItem.data_as_string = 'data:' + image.getContentType() + ';base64,' + Utilities.base64Encode(image.getBytes());
                    } catch(err) {
                        responseItem.content_type = false;
                        responseItem.name = '';
                        responseItem.is_google_type = true;
                        responseItem.data_as_string = '';
                    }

                    break;

                case FormApp.ItemType.LIST:
                    asItem = item.asListItem();

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch(err) {
                    }

                    responseItem.choices = [];

                    try {
                        if (asItem.getChoices().length) {
                            for (var j = 0; j < asItem.getChoices().length; j++) {
                                responseItem.choices.push(asItem.getChoices()[j].getValue());
                            }
                        }
                    } catch(err) {
                    }
                    break;

                case FormApp.ItemType.MULTIPLE_CHOICE:
                    asItem = item.asMultipleChoiceItem();

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch(err) {
                    }

                    responseItem.choices = [];

                    try {
                        if (asItem.getChoices().length) {
                            for (var j = 0; j < asItem.getChoices().length; j++) {
                                responseItem.choices.push(asItem.getChoices()[j].getValue());
                            }
                        }
                    } catch(err) {
                    }

                    try {
                        responseItem.has_other_option = asItem.hasOtherOption();
                    } catch(err) {
                        responseItem.has_other_option = false;
                    }

                    break;

                case FormApp.ItemType.PAGE_BREAK:
                    asItem = item.asPageBreakItem();

                    try {
                        responseItem.page_navigation_type = asItem.getPageNavigationType().toString();
                    } catch(err) {
                        responseItem.page_navigation_type = FormApp.PageNavigationType.CONTINUE;
                    }

                    break;

                case FormApp.ItemType.SCALE:
                    asItem = item.asScaleItem();

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch(err) {
                    }

                    try {
                        responseItem.left_label = asItem.getLeftLabel();
                    } catch(err) {
                        responseItem.left_label = '';
                    }

                    try {
                        responseItem.right_label = asItem.getRightLabel();
                    } catch(err) {
                        responseItem.right_label = '';
                    }

                    try {
                        responseItem.lower_bound = asItem.getLowerBound();
                    } catch(err) {
                        responseItem.lower_bound = 0;
                    }

                    try {
                        responseItem.upper_bound = asItem.getUpperBound();
                    } catch(err) {
                        responseItem.upper_bound = 100;
                    }
                    break;

                case FormApp.ItemType.TIME:
                    asItem = item.asTimeItem();

                    try {
                        responseItem.required = asItem.isRequired();
                    } catch(err) {
                    }
                    break;

                case 'VIDEO':
                    asItem = item;//.asVideoItem();

                    try {
                        responseItem.alignment = asItem.getAlignment().toString() || FormApp.Alignment.LEFT.toString();
                    } catch(err) {
                        responseItem.alignment = FormApp.Alignment.LEFT.toString();
                    }

                    try {
                        responseItem.width = asItem.getWidth();
                    } catch(err) {
                        responseItem.width = 0;
                    }
                    break;
            }

            return responseItem;
        },

        /**
         * Get form elements
         */
        getElements: function (params) {
            try {
                var form = FormApp.openById(params.form_id);
            } catch(err) {
                return {
                    status: false,
                    message: err.message
                };
            }

            var response = {
                status: true,
                data: []
            };

            var formItems = form.getItems();

            if (formItems.length) {
                for (var i = 0; i < formItems.length; i++) {
                    var item = formItems[i];

                    var responseItem = this.getElement(item);

                    response.data.push(responseItem);
                }
            }

            return response;
        },

        /**
         * Create element
         */
        createElement: function(params) {
            try {
                var form = FormApp.openById(params.form_id);
            } catch(err) {
                return {
                    status: false,
                    message: err.message
                };
            }

            var element = null;

            if (params.id > 0) {
                element = form.getItemById(params.id);
            }

            if (!element) {
                element = form['add' + toCamelCase(params.type, 1) + 'Item']();
            } else {
                form.moveItem(element, params.index);

                element = element['as' + toCamelCase(params.type, 1) + 'Item']();
            }

            for (var key in params) {
                try {
                    switch(key) {
                        case 'form_id':
                        case 'id':
                        case 'type':
                        case 'index':
                        case 'local_id':
                            break;

                        case 'lower_bound':
                        case 'upper_bound':
                            element.setBounds(params.lower_bound, params.upper_bound);
                            break;

                        case 'left_label':
                        case 'right_label':
                            element.setLabels(params.left_label, params.right_label);
                            break;

                        case 'has_other_option':
                            element.showOtherOption(params[key]);
                            break;

                        case 'alignment':
                            element.setAlignment(FormApp.Alignment[params[key]]);
                            break;

                        case 'image_url':
                            var img = UrlFetchApp.fetch(params.image_url);

                            element.setImage(img);
                            break;

                        default:
                            element['set' + toCamelCase(key, 1)](params[key]);
                            break;
                    }
                } catch(err) {
                    Logger.log(err.message);
                }
            }

            return {
                status: true,
                data: this.getElement(element)
            };
        },

        /**
         * Delete elements
         */
        deleteElements: function(params) {
            try {
                var form = FormApp.openById(params.form_id);
            } catch(err) {
                return {
                    status: false,
                    message: err.message
                };
            }

            var formItems = form.getItems();
            if (formItems.length) {
                for (var i = 0; i < formItems.length; i++) {
                    var item = formItems[i];
                    if (params.ids.indexOf(item.getId()) < 0) {
                        form.deleteItem(item);
                    }
                }
            }

            return {
                status: true,
                message: 'Successfully elements removed.'
            };
        }
    };

    return methods[args.method](args.params);
}

/**
 * Created by Elmar <e.abdurayimov@gmail.com> Abdurayimov
 * @copyright (C)Copyright 2016 elmar.eatech.org
 * Date: 2/16/16
 * Time: 3:12 PM
 */

function sendForm(e) {
    e = e || {};

    if (e.form_url == undefined || e.email == undefined || e.subject == undefined || e.from_name == undefined || e.from_email == undefined || e.html_body == undefined) {
        return {
            status: false,
            message: 'Not all parameters was passed'
        };
    }

    try {
        var form = FormApp.openByUrl(e.form_url);

        GmailApp.sendEmail(e.email, e.subject, '', {
            name: e.from_name,
            from: e.from_email,
            htmlBody: e.html_body + '<p>' + form.getPublishedUrl() + '</p>'
        });

        return {
            status: true
        };
    } catch (err) {
        return {
            status: false,
            message: err.message
        };
    }
}

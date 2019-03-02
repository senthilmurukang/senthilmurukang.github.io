$(document).ready(() => {
    $('.contact_me').click(() => {

    });
    $('#submit_contact_info').click((event) => {
        event.preventDefault();
        let target = $(event.target);
        let contactEmail = target.parent().parent().find('#contact_email').val();
        let contactPhoneNumber = target.parent().parent().find('#contact_phone_number').val();
        requestTransporter.post("http://thecuriouselectronicsengineer.appspot.com", {
            email: contactEmail,
            phoneNumber: contactPhoneNumber
        }, {
            callback: (data) => {
                console.log(data)
            },
            dataType: "jsonp",
            contentType: "application/json"
        })
    });
});
$(document).ready(() => {
    $('.contact_me').click(() => {

    });
    $('#submit_contact_info').click((event) => {
        event.preventDefault();
        let target = $(event.target);
        let contactFirstName = target.parent().parent().find('#contact_first_name').val();
        let contactLastName = target.parent().parent().find('#contact_last_name').val();
        let contactEmail = target.parent().parent().find('#contact_email').val();
        let contactPhoneNumber = target.parent().parent().find('#contact_phone_number').val();
        requestTransporter.post("https://thecuriouselectronicsengineer.appspot.com/api/StoreVisitorDetails", {
            firstName: contactFirstName,
            lastName: contactLastName,
            email: contactEmail,
            phoneNumber: contactPhoneNumber
        }, {
            callback: (data) => {
                console.log(data)
            },
            crossDomain: true,
            contentType: "application/json;charset=utf-8"
        })
    });
});
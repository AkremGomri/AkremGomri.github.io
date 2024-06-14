name_input = document.querySelector('[name="name"]')
email_input = document.querySelector('[name="email"]')
message_input = document.querySelector('[name="message"]')
btn_sendMail = document.querySelector('#send_mail')

btn_sendMail.addEventListener('click', (e) => {
    e.preventDefault();
    Email.send({
        SecureToken: "token",
        To: 'gomriakrem1@gmail.com',
        From: "sender mail",
        Subject: "Site web personnel : Avis de " + name_input.textcontent,
        Body: message_input.textcontent
    }).then(
        message => alert(message)
    );
})
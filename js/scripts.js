function validateForm() {
    const name = document.forms["contactForm"]["name"].value;
    const email = document.forms["contactForm"]["email"].value;
    const phone = document.forms["contactForm"]["phone"].value;
    const subject = document.forms["contactForm"]["subject"].value;
    const message = document.forms["contactForm"]["message"].value;
    const position = document.forms["contactForm"]["position"].value;

    if (name == "" || email == "" || phone == "" || subject == "" || message == "" || position == "") {
        alert("Todos los campos son obligatorios.");
        return false;
    }

    if (message.length > 200) {
        alert("El mensaje no puede exceder las 200 letras.");
        return false;
    }

    return true;
}
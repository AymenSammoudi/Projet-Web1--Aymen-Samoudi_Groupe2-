function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function submitForm() {
    const email = document.getElementById("email").value;
    const psw = document.getElementById("psw").value;
    if (!email && !psw) {
        window.alert("verifier votre email et mot de passe");
    } else if (!email) {
        window.alert("verifier votre email");
    } else if (!psw) {
        window.alert("verifier votre mot de passe");
    } else {
        window.alert("votre email est: " + email + "\n" + "votre mot de passe est: " + psw);
    }
}

function submitContactForm() {
    const nom = document.getElementById("nom").value;
    const email = document.getElementById("contact-email").value;
    const objet = document.getElementById("objet").value;
    const message = document.getElementById("message").value;
    if (!nom) {
        window.alert("verifier votre nom");
    }
    if (!email) {
        window.alert("verifier votre adresse mail");
    }
    if (!objet) {
        window.alert("verifier votre objet");
    }
    if (!message) {
        window.alert("verifier votre message");
    }
    if (nom && email && objet && message) {
        window.alert("votre message a été envoyé, nous vous retourner le plus rapidement possible.");
    }

}

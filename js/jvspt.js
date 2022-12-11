"use strict";
function validatename(name, valuer) {
    var msg;
    //Checking for Name isn't empty
    if (valuer == "") {
        msg = "Name cannot be null";
        printerror(name, msg);
        return false;
    }
    //Checking whether name is valid or not, Name shouldn't have anything else than alphabets
    if (valuer.match(/[^a-zA-Z]+$/)) {
        msg = "What kind of name it is? Your name shouldn't have Maths";
        printerror(name, msg);
        return false;
    }
    return true;
}
function validatemail(name, valuer) {
    var msg;
    // Checking whether email id is null or not
    if (valuer == "") {
        msg = "Email cannot be null";
        printerror(name, msg);
        return false;
    }
    return true;
}
function validation(e) {
    //Preventing default form behavior on submit
    e.preventDefault();
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var msg;
    //Checking both name and email
    if (validatename(name, name.value) && validatemail(email, email.value)) {
        e.target.submit();
    }
}
//Printing the error message on next element present, in this case span
function printerror(position, msg) {
    position.nextElementSibling.innerHTML = msg;
}
//Applying form validation on click of form
document.getElementById("firstform").addEventListener("submit", validation);

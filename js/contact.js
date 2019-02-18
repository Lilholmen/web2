function CheckForm(){

    var FIO = document.getElementById('fioContact1');
    var errorText = document.getElementById('errorText');

    var maleContact = document.getElementById("genderContact1");
    var famaleContact = document.getElementById("genderContact2");
    var genderContact1 = document.getElementById("genderContact3");
    var genderContact2 = document.getElementById("genderContact4");
    var errorRadio = document.getElementById("errorRadio");

    var errorNumber = document.getElementById("errorNumber");
    var numberContact = document.getElementById("numberContact");

    var errorMail = document.getElementById("errorMail");
    var emailContact = document.getElementById("emailContact");

    var errorMassage = document.getElementById("errorMassage");
    var massageContact = document.getElementById("massageContact1");

    event.preventDefault();
    if (!ValidateFIOform(FIO.value))
    {
        FIO.style.border = "1px solid #bf1300";
        FIO.focus();
        errorText.style.visibility = "visible";
    } else {
        FIO.style.border = "1px solid #00ff00";
        errorText.style.visibility = "hidden";
    }

    if (!famaleContact.checked && !maleContact.checked){
        errorRadio.style.visibility = "visible";

        genderContact1.style.height =
        genderContact2.style.height = "30px";

        genderContact1.style.borderBottom =
        genderContact2.style.borderBottom = "1px solid #bf1300";
    }
    else {
        genderContact1.style.borderBottom =
        genderContact2.style.borderBottom = "";

        errorRadio.style.visibility = "hidden";
    }

    if (!ValidateNumber(numberContact.value))
    {
        numberContact.style.border = "1px solid #bf1300";
        numberContact.focus();
        errorNumber.style.visibility = "visible";
    } else {
        numberContact.style.border = "1px solid #00ff00";
        errorNumber.style.visibility = "hidden";
    }

    if(!massageContact.value){
        massageContact.style.border = "1px solid #bf1300";
        errorMassage.style.visibility = "visible";
    } else {
        errorMassage.style.visibility = "hidden";
        massageContact.style.border = "";
    }

    if(!emailContact.value){
        emailContact.style.border = "1px solid #bf1300";
        errorMail.style.visibility = "visible";
    } else {
        errorMail.style.visibility = "hidden";
        emailContact.style.border = "";
    }
}

function ValidateFIOform(FIO) {
       if(FIO.split(" ").length === 3){
        return true;
    }
    else return false;
}
function ValidateNumber(number) {
    if(number.length < 9){
        return false;
    }
if ((number.indexOf('+3') !== 0 ) && (number.indexOf('+7') !== 0)) {
        return false;
    }
    return true;
}
function EnterNumber() {
    if (event.keyCode != 43 && event.keyCode < 48 || event.keyCode > 57) {
        event.preventDefault();
    }
}


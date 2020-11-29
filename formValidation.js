/* function ValidateEmail(emailInput, nameInput, occInput) {
    const mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    if(!emailInput.value.match(mailformat)) {
        // alert("You have entered an invalid email address!");
        document.getElementById("email-err").style.visibility="visible";
        // document.getElementById("email").focus();
        // return false;
    
    } else if(emailInput.value.match(mailformat) && nameInput.length > 0 && occInput.length > 0){
        alert("Valid email address!");
        // return true;
    }
} */

const email = document.getElementById('MERGE0');
const name = document.getElementById('MERGE1');
const occupation = document.getElementById('MERGE2');
const form = document.getElementById('news-form');

const mailformat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let emailErr = false;
    let nameErr = false;
    let occErr = false;

    if(!email.value.match(mailformat)){
        document.getElementById("email-err-message").style.visibility="visible";
        emailErr = true;
    } else {
        document.getElementById("email-err-message").style.visibility="hidden";
        emailErr = false;
    }

    if(name.value.length === 0 && !name.value){
        document.getElementById("name-err-message").style.visibility="visible";
        nameErr = true;
    } else {
        document.getElementById("name-err-message").style.visibility="hidden";
        nameErr = false;
    }

    if(occupation.value.length === 0 || !occupation.value){
        document.getElementById("occupation-err-message").style.visibility="visible";
        occErr = true;
    } else {
        document.getElementById("occupation-err-message").style.visibility="hidden";
        occErr = false;
    }
    

    if(!emailErr && !nameErr && !occErr){
        document.getElementById('submit-btn').style.display='none';
        document.getElementById('success-message').style.display='block';
        setTimeout(() => {
            form.submit();
        }, 2000);
    }
});
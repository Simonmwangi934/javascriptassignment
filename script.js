var nameerror = document.getElementById('name-error')
var emailerror = document.getElementById('email-error')
var ageerror = document.getElementById('age-error')
var gendererror = document.getElementById('gender-error')
var countryerror = document.getElementById('country-error')
var passworderror = document.getElementById('password-error')
var confirmerror = document.getElementById('confirm-error')
var submiterror = document.getElementById('register-error')

function validatenames() {
    var name = document.getElementById('register-name').value;

    if (name.length == 0) {
        nameerror.innerHTML = 'Name is required';
        nameerror.style.display = 'block';
        return false;
    } else if (!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/)) {
        nameerror.innerHTML = 'Write full name';
        nameerror.style.display = 'block';
        return false;
    } else {
        nameerror.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
        nameerror.style.display = 'block';
    }
}


function validateemail() {
    var registeremail = document.getElementById('register-email').value

    if (registeremail.length == 0) {
        emailerror.innerHTML = 'Email is required';
        nameerror.style.display = 'block;'
        return false;
    } else if (!registeremail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailerror.innerHTML = 'Enter Correct email format';
        nameerror.style.display = 'block;'
        return false;
    } else {
        emailerror.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
        nameerror.style.display = 'block;'
        return true;
    }
}

function validateage() {
    var ageerror = document.getElementById('register-age').value

    if (ageerror.length == 0) {
        ageerror.innerHTML = 'Age is required';
        ageerror.style.display = 'block;'
        return false;
    } else if (!age.match(/^[0-9]+$/)) {
        ageerrorr.innerHTML = 'Enter a Valid age';
        ageerror.style.display = 'block;'
        return false;
    } else {
        ageerror.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
        eageerror.style.display = 'block;'
        return true;
    }
}

function validategender() {
    var gendererror = document.getElementById('gender-error').value
    var gender = document.querySelector('input[ name="gender"]:Checked').value
    if (!gender) {
        gendererrorr.innerHTML = 'Please Select A gender';
        gendererrorr.style.display = 'block;'
        return false;
    } else {
        gendererrorr.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
        gendererrorr.style.display = 'block;'
        return true;
    }
}

// Validate country
function validatecountry() {
    var country = document.getElementById('register-country').value;
    if (country === "") {
        countryerror.innerHTML = 'Please select a country';
        countryerror.style.display = 'block';
        return false;
    } else {
        countryerror.innerHTML = 'i class="fa fa-check-circle" aria-hidden="true"></i>';
        countryerror.style.display = 'block';
        return true;
    }
}

function validatepassword() {
    var registerpassword = document.getElementById('register-password').value;

    // Check if the password field is empty
    if (registerpassword.length === 0) {
        passworderror.innerHTML = 'Password is required';
        passworderror.style.display = 'block';
        return false;
    }

    // Check if password meets length requirement
    else if (registerpassword.length < 8) {
        passworderror.innerHTML = 'Password must be at least 8 characters long';
        passworderror.style.display = 'block';
        return false;
    }


    // Password is valid
    else {
        passworderror.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
        passworderror.style.display = 'block';
        return true;
    }
}

function validateapasswords() {
    var registerpasswords = document.getElementById('register-confirmpassword').value;
    var registerpassword = document.getElementById('register-password').value;

    // Check if the password field is empty
    if (registerpasswords.length === 0) {
        confirmerror.innerHTML = 'Confirm Password is required';
        confirmerror.style.display = 'block';
        return false;
    }
    // Check if confirm password matches the password field
    else if (registerpassword !== registerpasswords) {
        confirmerror.innerHTML = 'Passwords do not match';
        confirmerror.style.display = 'block';
        return false;
    }
    // Password is valid
    else {
        confirmerror.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i>';
        confirmerror.style.display = 'block';
        return true;
    }
}

function validateform() {

    if (!validatenames() || !validateemail() || !validateage() || !validategender() ||
        !validatecountry() || !validatepassword() || !validateapasswords()) {
        submiterror.innerHTML = "Please fill all the fields as required to register"
        submiterror.style.display = 'block';
        setTimeout(function() { submiterror.style.display = 'none' }, 3000)
        return false;
    } else {
        return true;
    }
}
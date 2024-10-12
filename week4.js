document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const summaryElement = document.getElementById('formData');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent page reload on form submission
        handleFormSubmit();
    });

    form.addEventListener('input', function(event) {
        validateForm();
        updateSummary();
    });
});

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const terms = document.getElementById('terms').checked;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked');

    let isValid = true;

    // Validate Name
    if (name === "") {
        document.getElementById('nameError').textContent = "Name is required.";
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = "";
    }

    // Validate Email
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        document.getElementById('emailError').textContent = "Please enter a valid email.";
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = "";
    }

    // Validate Contact Method
    if (!contactMethod) {
        document.getElementById('contactMethodError').textContent = "Please select a contact method.";
        isValid = false;
    } else {
        document.getElementById('contactMethodError').textContent = "";
    }

    // Validate Terms
    if (!terms) {
        document.getElementById('termsError').textContent = "You must accept the terms and conditions.";
        isValid = false;
    } else {
        document.getElementById('termsError').textContent = "";
    }

    return isValid;
}

function getFormData() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked') ?
        document.querySelector('input[name="contactMethod"]:checked').value : 'N/A';
    const terms = document.getElementById('terms').checked;

    return {
        name,
        email,
        contactMethod,
        terms
    };
}



function updateSummary() {
    const formData = getFormData();
    const summary = `
        Name: ${formData.name || 'N/A'} <br>
        Email: ${formData.email || 'N/A'} <br>
        Preferred Contact Method: ${formData.contactMethod || 'N/A'} <br>
        Accepted Terms: ${formData.terms ? 'Yes' : 'No'}
    `;
    document.getElementById('formData').innerHTML = summary;
}

function handleFormSubmit() {
    if (validateForm()) {
        alert("Form submitted successfully!");
        updateSummary(); // Display form data summary
    } else {
        alert("Please fill out the form correctly.");
    }
}
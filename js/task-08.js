const form = document.querySelector(".login-form");

form.addEventListener("submit", OnSubmit);

function OnSubmit(e) {
    e.preventDefault();
    
    if (form.elements.email.value === "" || form.elements.password.value === "") {
        alert("All fields must be filled out.");
    } else {
        const formData = {
            email: form.elements.email.value,
            password: form.elements.password.value
        };
        console.log(formData);
        form.reset();
    }
}



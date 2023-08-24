// reset - ощищает формы
const form = document.getElementById("login-form"); 

form?.addEventListener("submit", OnSubmit);

function OnSubmit(e){
    e.preventDefault();
    console.dir(form);
    console.log(form.elements.email.value);
    form?.reset()
}




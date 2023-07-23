
// Мы получаем ссылку на форму с помощью document.querySelector(".login-form").

const loginForm = document.querySelector("login-form");


// Добавляем обработчик события "submit" на форму. Когда пользователь отправляет форму (нажимает на кнопку "Login"), событие "submit" срабатывает.
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = loginForm.elements.email;
    const passwordlInput = loginForm.elements.password;

    if(emailInput.value.trim() ==="" || passwordlInput.value.trim() === ""){
        alert("Пожалуйста, заполните все поля.");
    } else {
        const formData = {
            email: emailInput.value,
            password: passwordInput.value,
        };
        console.log(formData);
    }
    loginForm = reset();
});


// Получаем ссылки на поля ввода для email и password с помощью свойства elements формы. loginForm.elements.email даст ссылку на поле ввода для email, а loginForm.elements.password - на поле ввода для пароля.

// Проверяем, заполнены ли оба поля с помощью if-условия. Мы используем trim(), чтобы удалить возможные пробелы с начала и конца введенных данных и проверяем, что значения полей не пустые. Если хотя бы одно из полей пустое, выводим предупреждение с помощью alert().

// Если оба поля заполнены, создаем объект formData, в котором сохраняем значения полей email и password.

// Выводим объект formData в консоль с помощью console.log().

// Используем метод reset() для очистки значений полей формы после отправки.


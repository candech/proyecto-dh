const isEmpty = (input) => input.value && input.value.trim() !== "";
const isEmail = (input) => input.value.includes('@');
const validations = [
    {
        inputName: "email",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            },
            {
                validator: isEmail,
                errorMsg: "debes ingresar un email valido"
            },
        ]
    },
    {
        inputName: "password",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            }
        ]
    }

]
window.addEventListener("load", function () {    
    const form = document.querySelector("form.form")

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const errores = [];

        validations.forEach((elementToValidate) => {
            const element = form[elementToValidate.inputName];

            for (const validation of elementToValidate.validations) {
                const isValid = validation.validator(element);
                if (!isValid) {
                    errores.push(validation.errorMsg);
                    element.parentElement.classList.add("is-invalid");
                    element.parentElement.classList.remove("is-valid");
                    element.parentElement.querySelector(".error").innerHTML =
                        validation.errorMsg;
                    return
                }
            }
            element.parentElement.classList.add("is-valid");
            element.parentElement.classList.remove("is-invalid");
            element.parentElement.querySelector(".error").innerHTML = "";
        });

        if (errores.length == 0) {
            form.submit();
        } else {
            console.log(errores)
        }
    })

})


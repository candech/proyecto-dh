const isEmpty = (input) => input.value && input.value.trim() !== "";

const validations = [
    {
        inputName: "firstName",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            },
            {
                validator: (input) => input.value.length >= 2,
                errorMsg: "El nombre debe tener al menos 2 caracteres"
            }
        ]
    },
    {
        inputName: "lastName",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            },
            {
                validator: (input) => input.value.length >= 2,
                errorMsg: "El apellido debe tener al menos 2 caracteres"
            }
        ]
    },
    {
        inputName: "email",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            }
           
        ]
    },
    {
        inputName: "password",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            },
            {
                validator: (input) => input.value.length >= 8,
                errorMsg: "La contraseña debe tener un minimo de 8 caracteres"
            }
        ]
    },
    //falta validar select e imagen que no son inputs

]
window.addEventListener("load", function () {    
    const form = document.querySelector("form.form")

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const errores = [];

        validations.forEach((inputToValidate) => {
            const input = form[inputToValidate.inputName];

            for (const validation of inputToValidate.validations) {
                const isValid = validation.validator(input);
                if (!isValid) {
                    errores.push(validation.errorMsg);
                    input.parentElement.classList.add("is-invalid");
                    input.parentElement.classList.remove("is-valid");
                    input.parentElement.querySelector(".error").innerHTML =
                        validation.errorMsg;
                    return
                }
            }
            input.parentElement.classList.add("is-valid");
            input.parentElement.classList.remove("is-invalid");
            input.parentElement.querySelector(".error").innerHTML = "";
        });
        if (errores.length == 0) {
            form.submit();
        } else {
            console.log(errores)
        }
    })

});


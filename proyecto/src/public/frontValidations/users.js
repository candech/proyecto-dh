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
        inputName: "type",
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
    ,
    {
        inputName: "avatar",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
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
        // Validación adicional para el select
        const selectElement = form["type"];
        if (selectElement.selectedIndex === 0) {
            errores.push("Selecciona una rol");
            selectElement.parentElement.classList.add("is-invalid");
            selectElement.parentElement.classList.remove("is-valid");
            selectElement.parentElement.querySelector(".error").innerHTML =
                "Selecciona un rol";
        } else {
            selectElement.parentElement.classList.add("is-valid");
            selectElement.parentElement.classList.remove("is-invalid");
            selectElement.parentElement.querySelector(".error").innerHTML = "";
        }

        if (errores.length == 0) {
            form.submit();
        } else {
            console.log(errores)
        }
    })

})


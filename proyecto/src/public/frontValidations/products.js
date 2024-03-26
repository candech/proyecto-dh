const isEmpty = (input) => input.value && input.value.trim() !== "";

const validations = [
    {
        inputName: "name",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            },
            {
                validator: (input) => input.value.length >= 5,
                errorMsg: "El Titulo debe tener al menos 5 caracteres"
            }
        ]
    },
    {
        inputName: "price",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            }
        ]
    },
    {
        inputName: "category",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            },
           
        ]
    },
    {
        inputName: "description",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            },
            {
                validator: (input) => input.value.length >= 20,
                errorMsg: "La descripcion debe tener al menos de 20 caracteres"
            },
           
        ]
    },
    {
        inputName: "image",
        validations: [
            {
                validator: isEmpty,
                errorMsg: "Este campo es obligatorio"
            },
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
        // Validación adicional para el select
        //selecciona categoria del formulario, se pregunta si el elemento seleccionado es igual a 0
        //lo que significaria que no se ha seleccionado nada y se agregan las clases correspondientes con los errores
        //al elemento padre, pero si no es asi las borra y agrega la clase de que es valido
        const selectElement = form["category"];
        if (selectElement.selectedIndex === 0) {
            errores.push("Selecciona una categoría");
            selectElement.parentElement.classList.add("is-invalid");
            selectElement.parentElement.classList.remove("is-valid");
            selectElement.parentElement.querySelector(".error").innerHTML =
                "Selecciona una categoría";
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

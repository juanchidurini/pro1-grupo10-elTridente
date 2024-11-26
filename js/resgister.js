let email = document.getElementById("email")
let contraseña = document.getElementById("contraseña")
let formularioRegister = document.querySelector(".formularioRegister")
let terminosYcondiciones = document.getElementById("terminosYcondiciones")
let avisoTerminosYcondiciones = document.querySelector(".avisoTerminosYcondiciones")

formularioRegister.addEventListener(`submit`,function(e){
    e.preventDefault();
    console.log(terminosYcondiciones)
    if (email.value == "") {
        email.placeholder = "complete su email"
        email.classList.add("input-error");
       return;

    } else if (contraseña.value == "") {
            contraseña.placeholder = "ingrese una contraseña"
            contraseña.classList.add("input-error"); /// esto llama a una clase en css para que modifique el color del placeholfer si es que el campo contraseña esta vacio///
        return;

    } else if (contraseña.value.length < 3) {
        contraseña.placeholder = "la contraseña debe tener al menos 3 caracteres"
        return;

    }else if (!terminosYcondiciones.checked){
        avisoTerminosYcondiciones.innerText = "Por favor acepte los terminos y condiciones"
        return;

} else {formularioRegister.submit();}
    

});






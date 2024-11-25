let email = document.getElementById("email")
let contraseña = document.getElementById("contraseña")
let formularioRegister = document.querySelector(".formularioRegister")
let terminosYcondiciones = document.getElementById("terminosYcondiciones")


formularioRegister.addEventListener(`submit`,function(e){
    e.preventDefault();
    console.log(terminosYcondiciones)
    if (email.value == "") {
        email.placeholder = "complete su email"
       return;

    } else if (contraseña.value == "") {
            contraseña.placeholder = "ingrese una contraseña"
        return;

    } else if (contraseña.value.length < 3) {
        contraseña.placeholder = "la contraseña debe tener al menos 3 caracteres"
        return;

    }else if (!terminosYcondiciones.checked){
        return;

} else {formularioRegister.submit();}
    

});





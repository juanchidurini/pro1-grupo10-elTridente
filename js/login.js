
let email = document.getElementById("email")
let contraseña = document.getElementById("contraseña")
let formularioLogin = document.querySelector(".formularioLogin")

/// aca se verifica que los formularios cumplan con las características pedidas, si es asi se envia y te retorna al home.html///
formularioLogin.addEventListener(`submit`,function(e){
    e.preventDefault();
    if (email.value == "") {alert("El campo de email no debe quedar vacio, por favor complete el campo vacio");
        return;

    } else if (contraseña.value == "") {alert("por favor introduzca su contraseña");
        return;

    } else {formularioLogin.submit();}

})
let buscador = document.querySelector(".buscador")
let formulario = document.querySelector(".formulario")


formulario.addEventListener("submit", function (e) {
    e.preventDefault()
    if (buscador.value == "") {
        alert("Tiene que escribir algo")
    } else if (buscador.value.length < 3) {
        alert("Tiene que tener mas de 3 caracteres")
    } else {
        this.submit()
    }

})
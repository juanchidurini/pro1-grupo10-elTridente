let buscador = document.querySelector(".buscador")
let sectionRecetas = document.querySelector(".sectionRecetas")
let url = 'https://dummyjson.com/recipes?limit=10'
let formulario = document.querySelector(".formulario")
let botonCargarMas = document.querySelector(".BotonCargarMas")


function obtenerRecetas(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let dato = data.recipes;
            let recetas = "";
            for (let i = 0; i < dato.length; i++) {
                recetas += `<article>
                                <img src="${dato[i].image}" alt="">
                                <p> "${dato[i].name}" </p>
                                <p> "${dato[i].difficulty}"</p>
                                <a href="./detalleReceta.html"> ir a detalle </a> 
                    </article>`
            }
            sectionRecetas.innerHTML = recetas
        })
        .catch(function (error) {
            console.log("error: " + error);

        })
}

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

obtenerRecetas(url)

botonCargarMas.addEventListener("click", function(){
    obtenerRecetas(url)
})





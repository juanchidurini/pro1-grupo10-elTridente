let buscador = document.querySelector(".buscador")
let sectionRecetas = document.querySelector(".sectionRecetas")
let url = 'https://dummyjson.com/recipes?limit=10'
let formulario = document.querySelector(".formulario")
let botonCargarMas = document.querySelector(".botonCargarMas")
let recetasCargadas = 0;
/// articles con las recetas ///
function obtenerRecetas(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let dato = data.recipes;
            let recetas = "";
            for (let i = 0; i < dato.length; i++) {
                recetas += `<article class="articleRecetas">
                                <img class="imgHome" src="${dato[i].image}" alt="">
                                <p class="nombreComida"> ${dato[i].name} </p>
                                <p class="dificultadComida"> Dificultad: ${dato[i].difficulty}</p>
                                <a class="botonDetalles" href="./detalleReceta.html?id=${dato[i].id}"> ir a detalle </a> 
                    </article>`
            }
            sectionRecetas.innerHTML += recetas
            recetasCargadas +=10
        })
        .catch(function (error) {
            console.log("error: " + error);

        })
}
/// formulario ///
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

/// cargar 10 recetas mas///
botonCargarMas.addEventListener("click", function(e){
    url = `https://dummyjson.com/recipes?limit=10&skip=${recetasCargadas}`
    obtenerRecetas(url)
})





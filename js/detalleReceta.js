let qs = location.search;
let qsObj = new URLSearchParams (qs)
let IDreceta = qsObj.get(`id`)
url = `https://dummyjson.com/recipes/${IDreceta}`

let imgReceta = document.querySelector(".imgReceta")
let nombreReceta = document.querySelector(".nombreReceta")
let contenedorInstrucciones = document.querySelector(".contenedorInstrucciones")
let tiempoCoccion = document.querySelector(".tiempoCoccion")
let contenedorCategorias = document.querySelector(".contenedorCategorias")

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    imgReceta.src = data.image
    nombreReceta.innerText = data.name
    tiempoCoccion.innerText = ` tiempo de coccion: ${data.cookTimeMinutes}`

    /// Funcion para que los pasos de las recetas esten uno abajo del otro ///
    let instrucciones = ""
    for (let i = 0; i < data.instructions.length; i++) {
        instrucciones += `<li>${data.instructions[i]}</li>` }
    contenedorInstrucciones.innerHTML += instrucciones

    /// Funcion para que cada categoria quede con un a y te pueda llevar a esa categoria en específico en la pagina categorias ///
    let categorias = ""
    for (let i = 0; i < data.tags.length; i++) {
        categorias += `<a href="detalleCategoria.html?categoria=${data.tags[i]}">${data.tags[i]}  </a>` }
        contenedorCategorias.innerHTML = categorias
})
.catch(function (error) {
    console.log(`el error es: ` + error);
})

let contenedorCategorias = document.querySelector(".contenedorCategorias");
url = `https://dummyjson.com/recipes/tags`;

fetch(url)
.then(function(response){
return response.json();
})
.then(function(data){
console.log(data);

/// Función para que caundo clikeas la categoria te lleve a detalle categoria donde te aparecen todas las recetas de esa categoria ///
categorias = ""
for (let i = 0; i < data.length; i++) {
    categorias += `<li class="liCategorias" ><a class="aCategorias" href="DetalleCategoria.html?categoria=${data[i]}">${data[i]}</a></li>`
    
}
contenedorCategorias.innerHTML = categorias;


})
.catch(function(error){
console.log(`el error es` + error);

})
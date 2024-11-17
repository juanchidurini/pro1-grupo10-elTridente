
let qs = location.search;
let qsObj = new URLSearchParams (qs);
let IDreceta = qsObj.get(`categoria`);
 
let url = `https://dummyjson.com/recipes/tag/${IDreceta}`

let categoria = document.querySelector(".categoria")
let recetasDeCategoria = document.querySelector(".recetasDeCategoria")


fetch(url)
.then(function(response){
return response.json();
})
.then(function(data){
console.log(data);

categoria.innerText = IDreceta

/// Funcion para una vez clikeada la categoria eleguida aparezca en detalleCategoria las recetas que estan incluidas en esa categoria///
 recetas =""
for (let i = 0; i < data.recipes.length; i++) {
    recetas += `<article>
                <img src="${data.recipes[i].image}" alt="">
                <p> "${data.recipes[i].name}" </p>
                <p> "${data.recipes[i].difficulty}"</p>
                <a href="./detalleReceta.html?id=${data.recipes[i].id}"> ir a detalle </a> 
            </article>`
}
recetasDeCategoria.innerHTML = recetas

})
.catch(function(error){
    console.log(`el error es:` + error);
})
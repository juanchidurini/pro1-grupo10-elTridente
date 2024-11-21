let qs = location.search;
let qsObj = new URLSearchParams(qs);
let buscador = qsObj.get("buscador");
let sectionRecetas = document.querySelector(".sectionRecetas")


let url = `https://dummyjson.com/recipes/search?q=${buscador}`;
function obtenerRecetas(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let dato = data.recipes;

            if (dato.length==0) {
                alert("no se a encontrado ninguna receta")

            } else {
                
            }
            console.log(dato);

            let recetas = "";
            for (let i = 0; i < dato.length; i++) {
                recetas += `<article class="articleRecetas">
                                <img src="${dato[i].image}" alt="">
                                <p> "${dato[i].name}" </p>
                                <a href="./detalleReceta.html"> ir a detalle </a> 
                    </article>`
            }
            sectionRecetas.innerHTML = recetas

            
           
        })
        .catch(function (error) {
            console.log("error: " + error);
            
         })
}



obtenerRecetas(url);
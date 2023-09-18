// console.log('funcionaaaaaaaaaaaa');
const btn = document.querySelector('.btn');
const pokemon = document.querySelector('.search');
const titleimagen = document.querySelector('.contenedor__general__pokedex__resultado__pokemon');
// const caracteristicas_bloque = document.querySelector('.contenedor__general__pokedex__resultado__caracteristicas');

const obtenerJson = async function(poke){
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);
    const res = await data.json();
    console.log(res);
    console.log(res.sprites.front_default);

    let plantilla ='';
    
        plantilla += `
        <div class="contenedor__general__pokedex__resultado__pokemon__item">
            <h3 class="contenedor__general__pokedex__resultado__pokemon__item--titulo">${res.name}</h3>
            <div class="contenedor__general__pokedex__resultado__pokemon__item--image">
                <img src="${res.sprites.front_default}" alt="">
            </div>
        </div>
    `;
    
    titleimagen.innerHTML=plantilla;
    
}
btn.addEventListener('click', function(){
    // console.log(artista.value);
    obtenerJson(pokemon.value);
    pokemon.value='';
});


let pokemonContainer =  document.querySelector('.pokemon-container');


function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((respuesta) => respuesta.json())
    .then((data) => {
      crearPokemon(data);
    });
}

function fetchPokemons() {
  for (let i = 1; i <= 100; i++) {
    fetchPokemon(i);
  }
}
fetchPokemons(100);

           //
function crearPokemon(pokemon){
    let card = document.createElement('div');
    card.classList.add('card');

    let spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-cointainer');
    let sprite = document.createElement('img');
    sprite.src = pokemon.sprites.other.dream_world.front_default

    spriteContainer.appendChild(sprite);

    let number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString()}`;
    
    let button = document.createElement('div');
    button.classList.add('button');
    button.textContent = "Ver más";
    button.id = `${pokemon.id}`;
    button.addEventListener("click", recargar);


    let name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(button);

    pokemonContainer.appendChild(card);
    
}


function recargar(evento){
    console.log(evento.target);
    let id = evento.target.id;
    console.log(id);
    window.location.assign(`detalles.html?id=${id}`);

}









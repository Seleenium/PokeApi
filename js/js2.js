let pokemonContainer =  document.querySelector('.detalles');
let query= new URLSearchParams(location.search);
let id= query.get('id');



function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(respuesta => respuesta.json())
    .then(data => {
        crearPokemon(data);
    })
}

fetchPokemon(id);

function crearPokemon(pokemon){
    let card = document.createElement('div');
    card.classList.add('card');
    

    let spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-cointainer');

    let sprite = document.createElement('img');
    sprite.src = pokemon.sprites.other.dream_world.front_default

    spriteContainer.appendChild(sprite);

    let number = document.createElement('p');
    number.textContent = `Id: ${pokemon.id.toString()}`;

    let peso = document.createElement('p');
    peso.textContent = `Peso: ${pokemon.weight} kgs`;

    let tipo = document.createElement('p');
    tipo.textContent = `Tipo: ${pokemon.types[0].type.name}`;

    let button = document.createElement('div');
    button.classList.add('button');
    button.textContent = "Volver";
    button.href = `#${pokemon.id}`;
    button.addEventListener("click", recargar);


    let name = document.createElement('p');
    name.classList.add('name');
    name.textContent = `Pokemon: ${pokemon.name}`

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(tipo);
    card.appendChild(peso);

    
    card.appendChild(button);
    pokemonContainer.appendChild(card);
    
}


function recargar(){
    window.location.assign('index.html');
}

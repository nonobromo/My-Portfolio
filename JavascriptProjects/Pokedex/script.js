const typeSelect = document.querySelector('#poke-type');
let savedPokemonsArray = localStorage.getItem("saved") ? localStorage.getItem("saved").split(",") : [];
const selectArea = document.querySelector(".select-area");
typeSelect.addEventListener('input', async function () {
    showPokemon();
    fetchPokemon();
    const lis = document.querySelectorAll('.card-container');
    for (const l of lis) {
        l.remove();
    }
});

let pokeurl;

const searchInput = document.querySelector("#input-search");

const divCards = document.querySelector('#pokeCards').childNodes;
divCards[0].remove();

searchInput.addEventListener("input", e => {

    const value = e.target.value.toLowerCase();
    divCards.forEach(
        card => {
            let isVisable = card.id.startsWith(value);
            card.classList.toggle("hide", !isVisable)

        }
    );
})

async function showPokemon() {
    const poketype = document.querySelector('#poke-type').value;
    try {
        const types = await fetch(`https://pokeapi.co/api/v2/type/${poketype}`);

        if (!types.ok) {
            throw new Error('no response');
        }

        const data = await types.json();


        const allPokemons = data.pokemon;


        const pokeList = document.querySelector('.container');


        for (let i = 0; i < allPokemons.length; i++) {
            const name = data.pokemon[i].pokemon.name;
            const url = data.pokemon[i].pokemon.url;

            const urls = url.split('/');


            urls.pop();
            const id = urls.pop();
            const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

            const cardContainer = document.createElement("div");
            cardContainer.classList.add("card-container");
            const divCard = document.createElement("div");

            divCard.classList.add("cardPoke")
            cardContainer.setAttribute('id', name);
            const h2 = document.createElement("h2");
            const img = document.createElement("img");
            h2.innerHTML = `${id}:${name}`;
            img.src = imgUrl;
            divCard.appendChild(h2);
            divCard.appendChild(img);
            cardContainer.appendChild(divCard)
            pokeList.appendChild(cardContainer);
        }
        for (let i = 0; i < allPokemons.length; i++) {
            const divCards = document.querySelectorAll(".card");
            pokeDivs = allPokemons.map(pokemon => {
                return { name: pokemon.pokemon.name, divCard: divCards[i] };
            })
        }
    } catch (error) {
        console.log(error);
    }
    fetchPokemon()
}

showPokemon();

function fetchPokemon() {
    const cards = document.querySelectorAll(".cardPoke");

    cards.forEach((c) => c.addEventListener("click", function () {
        const splitUrl = c.innerHTML.split('/');

        let pokeId = splitUrl[9].split('.png">').join("");

        const url = `https://pokeapi.co/api/v2/pokemon/${pokeId}`;

        fetch(url).then((x) => {
            return x.json();
        }).then(pokemon => {

            createCard(pokemon)

        })
    }))
}

function createCard(pokemon) {
    document.querySelector(".loaderFrame").style.display = "grid";
    selectArea.style.display = "none"

    //Show Pokemon Pic
    const cardPic = document.getElementById("cardpic");
    cardPic.style.width = "150px";
    cardPic.style.height = "150px";
    cardPic.src = pokemon.sprites.front_default;

    //Show Pokemon Stats
    document.getElementById("pokename").innerHTML = `${pokemon.name} #${pokemon.id}`;
    document.getElementById("pokeweight").innerHTML = `Weight:${pokemon.weight}`;
    document.getElementById("pokeheight").innerHTML = `Height:${pokemon.height}`;

    //Show Pokemon Types

    const pokeTypesDiv = document.querySelector("div.loaderFrame > div > div:nth-child(3)")

    const numbOfTypes = pokemon.types

    const numofAbiltys = pokemon.abilities

    for (let i = 0; i < pokemon.types.length; i++) {
        const h3 = document.createElement("h3");
        h3.innerHTML = pokemon.types[i].type.name
        pokeTypesDiv.appendChild(h3);
    }

    //Show Pokemon Abilites

    const pokeAbilities = document.querySelector("div.loaderFrame > div > div:nth-child(4)");

    for (let j = 0; j < numofAbiltys.length; j++) {
        const span = document.createElement("span");
        span.innerHTML = pokemon.abilities[j].ability.name;
        pokeAbilities.appendChild(span);
    }

    removeCard(numbOfTypes);
}

const exitBtn = document.getElementById("exit-btn")
function removeCard(types) {

    exitBtn.addEventListener("click", () => {
        document.querySelector(".loaderFrame").style.display = "none";
        selectArea.style.display = "flex"
        //Remove Pokemon created type elements
        const numsOfh3 = this.document.querySelectorAll("h3");

        for (const num of numsOfh3) {
            num.remove();
        }

        //Remove Pokemon Created abilities elements
        const numsOfAbilities = this.document.querySelectorAll("span");

        for (const numb of numsOfAbilities) {
            numb.remove();
        }
    })
}


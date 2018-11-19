import PokemonService from "./pokemon-service.js";

let _pokemonService = new PokemonService()

function drawdetails(deets) {
  console.log(deets)
  let detailstemplate = `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${deets.sprites.front_default}" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">${deets.name}</h5>
            <p class="card-text">${deets.abilities[0].ability.name}</p>
          </div>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">${deets.types[0].type.name}</li>
            <li class="list-group-item">${deets.weight}</li>
        </ul>
      <div class="card-body">
        <a href="#" class="card-link">previous</a>
        <a href="#" class="card-link">next</a>
      </div>
    </div>
    `
  document.getElementById("pokecard").innerHTML = detailstemplate
}

export default class PokemonController {
  constructor() {
    console.log("hello from the pokemon controller!")
    console.log(_pokemonService.getAllPokemon(this))
  }
  catchName() {
    let name = document.getElementById("pokename").value
    _pokemonService.getpokedetails(name, drawdetails)
  }
  // drawdetails(deets) {
  //   let detailstemplate = `
  //       <div class="card" style="width: 18rem;">
  //         <img class="card-img-top" src="${deets.sprites.front_default}" alt="Card image cap">
  //         <div class="card-body">
  //           <h5 class="card-title">${deets.name}</h5>
  //           <p class="card-text">${deets.abilities}</p>
  //         </div>
  //        <ul class="list-group list-group-flush">
  //           <li class="list-group-item">${deets.types}</li>
  //           <li class="list-group-item">${deets.weight}</li>
  //       </ul>
  //     <div class="card-body">
  //       <a href="#" class="card-link">previous</a>
  //       <a href="#" class="card-link">next</a>
  //     </div>
  //   </div>
  //   `
  //   document.getElementById("pokecard").innerHTML = detailstemplate
  // }
}
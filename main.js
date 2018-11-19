import PokemonController from "./app/components/pokemon-controller.js"
import PokemonService from "./app/components/pokemon-service.js";

class App {
  constructor() {
    this.controllers = {
      pokemonController: new PokemonController(),
      pokemonService: new PokemonService()
    }
  }
}

window.app = new App()

console.log("the app is running!")
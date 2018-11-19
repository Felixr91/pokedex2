let pokemonAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/"
})

let _Allpokemon = []

export default class PokemonService {
  constructor() {
    // console.log("hello poke service!")
  }
  get AllPokemon() {
    return _Allpokemon
  }
  getAllPokemon(draw, fail) {
    pokemonAPI.get('/')
      .then(res => {
        _Allpokemon = res.data.results
        // console.log(_Allpokemon)
      })
      .catch(error => {
        console.log(error)
      })
  }
  getpokedetails(name, drawdetails) {
    pokemonAPI.get("/" + name + "/")
      .then(res => {
        let current = res.data
        console.log(res.data)
        drawdetails(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
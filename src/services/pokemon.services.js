import axios from "axios"
import { API_URL } from "./../util/enviroment"

export async function getPokemonList() {
    const { data } = await axios.get(API_URL, {
        limit: 20,
    })
    return data.results
}

export async function getPokemon(uri = "") {
    const { data } = await axios.get(uri)
    return data
}

export async function getPokemonData() {
    try {
        const pokemons = await getPokemonList()

        const pokemonPromises = pokemons.map((pokemon) => getPokemon(pokemon.url))

        return await Promise.all(pokemonPromises)
    } catch (error) {
        throw error
    }
}

import { useState } from 'react'
import FlavorText from './FlavorText'
import useFetch from '../../hooks/useFetch'
import './pokemon.css'

const Pokemon = ({ entrySelected, pokemonId }) => {
  const [pokemonUrl] = useState('https://pokeapi.co/api/v2/pokemon/' + pokemonId || 'X')
  const [pokemonSpeciesUrl] = useState('https://pokeapi.co/api/v2/pokemon-species/' + pokemonId || 'X')
  const [config] = useState({})
  const {data: pokemon, loading: loading1, error: error1} = useFetch(pokemonUrl, config)
  const {data: pokemonSpecies, loading: loading2, error: error2} = useFetch(pokemonSpeciesUrl, config)  


  return (
    <div>
      {pokemon && pokemonSpecies
      ?
      (<div className="pokemon">
        <div className="pokemon__info flex">
          <div className="pokemon__sprite">
            <img src={pokemon.sprites.versions["generation-i"].yellow.front_transparent} alt={pokemon.name} />
            <p className="bold">No. { pokemon.id.toString().padStart(3, '0') }</p>
          </div>
          <div className="pokemon__stats flex flex--column">
            <p>{ pokemon.name.toUpperCase() }</p>
            <p>{ pokemonSpecies.genera[7].genus.toUpperCase() }</p>
            <p>HT &nbsp;&nbsp;&nbsp; <b className="bold">{ pokemon.height } m</b></p>
            <p>WT &nbsp;&nbsp;&nbsp; <b className="bold">{ pokemon.weight } kg</b></p>
          </div>
        </div>
        <div className="pokemon__text">
          <FlavorText
            text={pokemonSpecies.flavor_text_entries.find(entry => entry.language.name === "en" && entry.version.name === "yellow").flavor_text}
            entrySelected={entrySelected}
          />
        </div>
      </div>)
      :
      <span>Loading Pokemon...</span>
      }
    </div>
  )
}
export default Pokemon
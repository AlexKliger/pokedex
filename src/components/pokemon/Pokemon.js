import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import './pokemon.css'

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon-species/'

const Pokemon = ({ pokemon, entrySelected }) => {
  const [config] = useState({})
  console.log('Pokemon(', pokemon, ')')

  return (
    <div>
      {pokemon
      ?
      (<div className="pokemon">
        <div className="pokemon__info flex">
          <div className="pokemon__image flex flex--column">
            <img src={pokemon.sprites.versions["generation-i"].yellow.front_transparent} alt={pokemon.name} />
            <p className="bold">No. { pokemon.id }</p>
          </div>
          <div className="pokemon__stats flex flex--column">
            <p>{ pokemon.name.toUpperCase() }</p>
            {/* <p>{ pokemon.genera[7].genus.toUpperCase() }</p> */}
            <p>WT &nbsp;&nbsp;&nbsp; <b className="bold">{ pokemon.weight }</b></p>
            <p>HT &nbsp;&nbsp;&nbsp; <b className="bold">{ pokemon.height }</b></p>
          </div>
        </div>
        <div className="pokemon__text">
          {/* <p>{pokemon.flavor_text_entries[0].flavor_text}</p> */}
          <button onClick={() => entrySelected('')}>X</button>
        </div>
      </div>)
      :
      <span>Loading...</span>
      }
    </div>
  )
}
export default Pokemon
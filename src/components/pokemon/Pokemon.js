import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import './pokemon.css'

const Pokemon = ({ entrySelected, pokemonId }) => {
  const [url1] = useState('https://pokeapi.co/api/v2/pokemon/' + pokemonId || 'X')
  const [url2] = useState('https://pokeapi.co/api/v2/pokemon-species/' + pokemonId || 'X')
  const [config] = useState({})
  const {data: pokemon1, loading: loading1, error: error1} = useFetch(url1, config)
  const {data: pokemon2, loading: loading2, error: error2} = useFetch(url2, config)  


  return (
    <div>
      {pokemon1 && pokemon2
      ?
      (<div className="pokemon">
        <div className="pokemon__info flex">
          <div className="pokemon__image flex flex--column">
            <img src={pokemon1.sprites.versions["generation-i"].yellow.front_transparent} alt={pokemon1.name} />
            <p className="bold">No. { pokemon1.id }</p>
          </div>
          <div className="pokemon__stats flex flex--column">
            <p>{ pokemon1.name.toUpperCase() }</p>
            <p>{ pokemon2.genera[7].genus.toUpperCase() }</p>
            <p>WT &nbsp;&nbsp;&nbsp; <b className="bold">{ pokemon1.weight }</b></p>
            <p>HT &nbsp;&nbsp;&nbsp; <b className="bold">{ pokemon1.height }</b></p>
          </div>
        </div>
        <div className="pokemon__text">
          <p>{pokemon2.flavor_text_entries[0].flavor_text}</p>
          <button onClick={() => entrySelected('X')}>X</button>
        </div>
      </div>)
      :
      <span>Loading Pokemon...</span>
      }
    </div>
  )
}
export default Pokemon
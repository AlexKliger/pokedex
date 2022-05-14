import './pokemon.css'
import React from 'react'

const Pokemon = ({ pokemon, loading, setSelectedEntry }) => {

    return loading ? (
        <span>Loading...</span>
    ) : (
        <div className="pokemon">
            <div className="pokemon__info flex">
                <div className="pokemon__image flex flex--column">
                    <img src={pokemon.sprites.versions["generation-i"].yellow.front_transparent} alt={pokemon.name} />
                    <p className="bold">No. { pokemon.id }</p>
                </div>
                <div className="pokemon__stats flex flex--column">
                    <p>{ pokemon.name.toUpperCase() }</p>
                    <p>{ pokemon.genera[7].genus.toUpperCase() }</p>
                    <p>WT &nbsp;&nbsp;&nbsp; <b className="bold">{ pokemon.weight }</b></p>
                    <p>HT &nbsp;&nbsp;&nbsp; <b className="bold">{ pokemon.height }</b></p>
                </div>
            </div>
            <div className="pokemon__text">
                <p>{pokemon.flavor_text_entries[0].flavor_text}</p>
                <button onClick={() => setSelectedEntry('')}>X</button>
            </div>
        </div>
    )
}
export default Pokemon
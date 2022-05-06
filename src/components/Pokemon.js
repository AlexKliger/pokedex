import React from "react"

const Pokemon = ({ pokemon, loading }) => {

    return loading ? (
        <span>Loading...</span>
    ) : (
        <div className="pokemon">
            <div className="pokemon__info">
                <div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <p>{ pokemon.id }</p>
                </div>
                <div>
                    <p>{ pokemon.name.toUpperCase() }</p>
                    <p>WT { pokemon.weight }</p>
                    <p>HT { pokemon.height }</p>
                </div>
            </div>
            <div className="pokemon__text">
                <p>{pokemon.flavor_text_entries[0].flavor_text}</p>
            </div>
        </div>
    )
}
export default Pokemon
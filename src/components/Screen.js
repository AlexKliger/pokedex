import React, { useState } from "react";
import Entries from "./Entries";
import Pokemon from "./pokemon/Pokemon"
import useFetchPokemon from "../hooks/useFetchPokemon";

const Screen = ({ entries }) => {
    const [selectedEntry, setSelectedEntry] = useState('')
    const {pokemon, loading, error} = useFetchPokemon(selectedEntry)

    return (
        <div className="screen">
            {selectedEntry
            ?
            <Pokemon pokemon={pokemon} loading={loading} setSelectedEntry={setSelectedEntry} />
            :
            <Entries entries={entries} setSelectedEntry={setSelectedEntry}/>
            }
        </div>
    )
}

export default Screen
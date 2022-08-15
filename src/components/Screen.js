import React, { useCallback, useState } from "react";
import Entries from "./Entries";
import Pokemon from "./pokemon/Pokemon"
import useFetch from "../hooks/useFetch"

const Screen = () => {
    const [url] = useState('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
    const [config] = useState({})
    const {data, loading, error} = useFetch(url, config)

    const [selectedEntry, setSelectedEntry] = useState('X')
    const entrySelected = useCallback((index) => {
        setSelectedEntry(index)
    })

    return (
        <div className="screen">
            {selectedEntry !== 'X'
            ?
            <Pokemon entrySelected={entrySelected} pokemonId={selectedEntry} />
            :
            <Entries entries={data ? data.results : []} entrySelected={entrySelected}/>
            }
        </div>
    )
}

export default Screen
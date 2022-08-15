import React, { useCallback, useState } from "react";
import Entries from "./Entries";
import Pokemon from "./pokemon/Pokemon"

const Screen = ({ entries }) => {
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
            <Entries entries={entries} entrySelected={entrySelected}/>
            }
        </div>
    )
}

export default Screen
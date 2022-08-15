import React, { useState } from "react";
import Entries from "./Entries";
import Pokemon from "./pokemon/Pokemon"
import useFetch from "../hooks/useFetch";

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

const Screen = ({ entries }) => {
    const [url, setUrl] = useState('')
    const [config] = useState({})
    const {data, loading, error} = useFetch(url, config)

    function entrySelected(index) {
        setUrl(BASE_URL + index)
    }

    return (
        <div className="screen">
            {url
            ?
            <Pokemon pokemon={data} entrySelected={entrySelected} />
            :
            <Entries entries={entries} entrySelected={entrySelected}/>
            }
        </div>
    )
}

export default Screen
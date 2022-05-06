import { useEffect, useReducer } from "react"

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, pokemon: {}}
        case ACTIONS.GET_DATA:
            return {...state, loading: false, pokemon: action.payload.pokemon}
        case ACTIONS.ERROR:
            return {...state, loading: false, error: action.payload.error, pokemon: {}}
        default:
            return state
    }
}

export default function useFetchPokemon(entry) {
    const [state, dispatch] = useReducer(reducer, {pokemon: {}, loading: true} )

    useEffect(() => {
        async function fetchPokemon() {
            await fetch(BASE_URL + entry
                ).then(response => response.json()
                ).then(pokemon => {
                    // Make a separate API call.
                    fetch(pokemon.species.url
                        ).then(response => response.json()
                        ).then(pokemonSpecies => {
                            pokemon = {...pokemon, ...pokemonSpecies}
                            dispatch({type: ACTIONS.GET_DATA, payload: {pokemon: pokemon}})
                        }).catch(err => dispatch({type: ACTIONS.ERROR, payload: {error: err}}))
                }).catch(err => dispatch({type: ACTIONS.ERROR, payload: {error: err}}))
        }

        if (entry) {
            dispatch({type: ACTIONS.MAKE_REQUEST})
            fetchPokemon()
        }
    }, [entry])

    return state
}
import { useEffect, useReducer } from "react"

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151'

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, entries: []}
        case ACTIONS.GET_DATA:
            return {...state, loading: false, entries: action.payload.entries}
        case ACTIONS.ERROR:
            return {...state, loading: false, error: action.payload.error, entries: []}
        default:
            return state
    }
}

export default function useFetchEntries() {
    const [state, dispatch] = useReducer(reducer, {entries: [], loading: true} )

    useEffect(() => {
        async function fetchEntries() {
            await fetch(BASE_URL
                ).then(response => response.json()
                ).then(json => dispatch({type: ACTIONS.GET_DATA, payload: {entries: json.results}})
                ).catch(err => dispatch({type: ACTIONS.ERROR, payload: {error: err}}))
        }

        dispatch({type: ACTIONS.MAKE_REQUEST})
        fetchEntries()
    }, [])

    return state
}
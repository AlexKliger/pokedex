import { useEffect, useReducer } from "react"

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

function reducer(state, action) {
    switch(action.type) {
        case ACTIONS.MAKE_REQUEST:
            return {loading: true, data: null}
        case ACTIONS.GET_DATA:
            return {...state, loading: false, data: action.payload}
        case ACTIONS.ERROR:
            return {...state, loading: false, error: action.payload.error, data: null}
        default:
            return state
    }
}

function useFetch(url, config) {
    const [state, dispatch] = useReducer(reducer, {data: null, loading: false})

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {'Content-Type': 'application/json'},
                    ...config
                })

                const data = await res.json()
                dispatch({type: ACTIONS.GET_DATA, payload: data})
            } catch(err) {
                dispatch({type: ACTIONS.ERROR, payload: {error: err}})
            }
        }

        dispatch({type: ACTIONS.MAKE_REQUEST})
        fetchData()
    }, [url, config])
    console.log(`useFetch(url: ${url}) ->`, 'state:', state)
    return state
}

export default useFetch
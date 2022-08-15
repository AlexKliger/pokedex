import { useState } from 'react'
import './App.css'
import Header from  './components/Header'
import Screen from './components/Screen'
import Interface from './components/interface/Interface'
import useFetch from "./hooks/useFetch"

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon'

function App() {
  const [url] = useState(BASE_URL + '/?offset=0&limit=151')
  const [config] = useState({})
  const {data, loading, error} = useFetch(url, config)

  return (
    <div className="pokedex">
      <Header />
      <Screen entries={data ? data.results : []} />
      <Interface />
    </div>
  )
}

export default App;

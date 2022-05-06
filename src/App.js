import './App.css';
import Header from  './components/Header'
import Screen from './components/Screen'
import Interface from './components/Interface';
import useFetchEntries from './hooks/useFetchEntries'

function App() {
  const {entries, loading, error} = useFetchEntries()

  return (
    <div className="pokedex">
      <Header />
      <Screen entries={entries} />
      <Interface />
    </div>
  )
}

export default App;

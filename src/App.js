import './App.css'
import Header from  './components/Header'
import Screen from './components/Screen'
import Interface from './components/interface/Interface'

function App() {
  return (
    <div className="pokedex">
      <Header />
      <Screen />
      <Interface />
    </div>
  )
}

export default App;

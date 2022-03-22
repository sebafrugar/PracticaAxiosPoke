import React, { useState } from 'react'
import './App.css';
import Axiosapi from './Components/AxiosAPi';

function App() {

  const [pokemons,setPokemons]=useState([]);

  return (
    <div className="App">
      <Axiosapi pokemons={pokemons}  setPokemons={setPokemons}/>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import axios from 'axios';

const Axiosapi = (props) => {

    const {pokemons,setPokemons}= props;
    const [elegido,setElegido] = useState()
    const [displaypoke,setDisplaypoke] = useState(false)

    const onClick = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then((response) => {
            console.log(response)
            setPokemons(response.data.results);
        })
        .catch((error)=>console.log(error));

    }

    const onSubmit = (e) => {
        e.preventDefault()
        setDisplaypoke(true)
    }

    const onChangepoke = (e) =>{
        setElegido(e.target.value)
        setDisplaypoke(false)
    
    }


    return (
        <div>
            <button onClick={onClick}> Traer Pokemones </button>
            <form onSubmit={onSubmit}>
                <label htmlFor="filtro">Filtro : </label>
                <input type="text" name="filtro" onChange={onChangepoke}/>
                <input type="submit" value="Buscar"/>
            </form>
            <div>
                <h2>Pokemon encontrado :</h2>
                {
                    displaypoke && pokemons.filter(p=> p.name === elegido).map(poke=> <h3 key={poke}> {poke.name} </h3>)
                }
            </div>
            <div>
                <h1>Listado de pokemones :</h1>
            </div>
            <div>
                <ol>
                    {
                        pokemons?.map((poke,index)=> <li key={index}>{poke.name} </li>)
                    }
                </ol>
            </div>
        </div>
    );
}

export default Axiosapi;

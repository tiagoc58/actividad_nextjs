'use client';
import { useState, useEffect} from "react";

export function Menu() {
  const [nombre, setNombre] = useState("")
  
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <input id="pokemonBuscar" type="text" placeholder="Escribe un pokemon" className="border p-2 rounded mt-2"/>
      <button className="bg-gray-500 rounded-lg text-[20px] px-5 py-2" onClick={() => {
        const nompok = document.getElementById("pokemonBuscar").value;
        if(nompok.trim() === "") return null;
        setNombre(nompok)
      }}>Buscar Pokemon</button>
     <BuscadorPokemon nombre={nombre}/>
    </div>
  );
}

export function BuscadorPokemon({ nombre }) {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!nombre || nombre.trim() === "") return;

    setError(null);
    setPokemon(null);

    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre.toLowerCase()}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Pokémon no capturado 😢");
        }
        return res.json();
      })
      .then((data) => {
        setPokemon(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [nombre]);

  if (!nombre || nombre.trim() === "") return null;

  return (
    <div className="flex flex-col items-center gap-4">
      {
        error ? (<h2 className="w-80 h-80 text-red-500 text-[28px] text-center flex items-center">{error}</h2>) :
        !pokemon ? (<h2 className="w-80 h-80 text-[28px] text-center flex items-center">Cargando Pokémon...</h2>) :
        (
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl font-semibold capitalize text-[28px]">{pokemon.name}</h1>
            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-80 h-80"
            />
          </div>
        )
      }
    </div>
  );
}
import React, { useEffect, useState } from 'react'
import PokemonCards from './PokemonCards';
function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const Api = "https://pokeapi.co/api/v2/pokemon?limit=30"
  const fetchPokemon = async () => {
    try {
      const response = await fetch(Api);
      const data = await response.json();
      const pokemonData = data.results.map(async (pokemon) => {
        const result = await fetch(pokemon.url);
        const pokemonAllData = await result.json();
        return pokemonAllData;
      })
      console.log(pokemonData);
      const detailedResponse = await Promise.all(pokemonData);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError(err);
    }
  }


  useEffect(() => {
    fetchPokemon();
  }, [])

  if (loading) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    )
  }

  const searchContain = pokemon.filter((curr) => curr.name.toLowerCase().includes(search.toLowerCase()))

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    )
  }

  return (
    <>
      <section className='container'>
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className='pokemon-search'>
          <input type="text" placeholder='search pokemon' value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <div>
          <ul className='grid-three-cols card'>
            {
              searchContain.map((currPokemon) => {
                return <PokemonCards pokemon={currPokemon} key={currPokemon.id} />
              })
            }
          </ul>
        </div>
      </section>
    </>
  )
}

export default Pokemon

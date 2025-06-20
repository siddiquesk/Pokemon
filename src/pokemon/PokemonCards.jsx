import React from 'react'

function PokemonCards({ pokemon }) {

  return (
    <>
      <li className='pokemon-card'>
        <figure>
          <img src={pokemon.sprites
            .other.dream_world.front_default} alt="pokemon" className='pokemon-image' />
        </figure>
        <h1 className='pokemon-name'>{pokemon.name}</h1>
        <div className='pokemon-info pokemon-highlight'>
          <p>
            {pokemon.types.map((type) => type.type.name).join(" ,")}
          </p>
        </div>
        <div className='grid-three-cols'>
          <p className='pokemon-info'>
            <span>Height:</span>{pokemon.height}
          </p>
          <p className='pokemon-info'>
            <span>Weight:</span>{pokemon.weight}
          </p>
          <p className='pokemon-info'>
            <span>speed:</span>{pokemon.stats[5].base_stat}
          </p>
          <div className='pokemon-info'>
            <p>
              {
                pokemon.abilities.map((ability) => ability.ability.name).slice(0, 1).join(" ,")
              }
            </p>
          </div>

        </div>
      </li >
    </>
  )
}

export default PokemonCards

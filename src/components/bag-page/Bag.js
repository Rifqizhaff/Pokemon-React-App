import './Bag.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

// {pokemon, id, name, image, type, height, hp, att, spd, def, catchPoke, setCatchPoke, catchPokemon, releasePokemon}

const Bag = ({pokemon, bagPoke, setBagPoke, pokeCount, setPokeCount}) => {

    // const [pokeCount, setPokeCount] = useState(0);

    console.log(pokeCount);

    const releasePokemon = (id) => {
        setBagPoke(state => state.filter(poke => poke.id !== id))
        setPokeCount(pokeCount - 1);
    }

    useEffect(()=> {
        setBagPoke(JSON.parse( localStorage.getItem("pokemons")));
        setPokeCount(JSON.parse(localStorage.getItem("count")));
    }, []);

    useEffect(()=> {
        localStorage.setItem("pokemons", JSON.stringify(bagPoke));
        localStorage.setItem("count", JSON.stringify(pokeCount));
    }, [bagPoke]);
    
    return(
        <div className='col-4'>

            <div className='baag' >
                
                <div className='bag-content'>
                    <div className='detail-poke'>
                        <div className="card text-center border-dark pb-2 pt-2 ps-2 pe-2">
                            <div className='bgimg'>
                                <img src={pokemon.sprites.other.dream_world.front_default}></img>
                            </div>
                            <div className="card-body">
                                <div className='row mb-1'>
                                    <div className='idp col btn btn-light btn-outline-dark text-black' disabled>
                                        {pokemon.id}
                                    </div>
                                    <div className='typ col btn btn-secondary btn-outline-dark text-white' disabled>
                                        {pokemon.types[0].type.name}
                                    </div>
                                    <div className='col'>
                                        <button 
                                        className='rmp remove btn btn-danger btn-outline-dark text-white' 
                                        onClick={() => releasePokemon(pokemon.id)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='imeg container-fluid'>
                                        <img src={pokemon.sprites.other.dream_world.front_default} className="img-fluid" alt="..."></img>
                                    </div>
                                </div>
                                <div className='row infod'>
                                    <div className='col'>
                                        <div className='row'>
                                            <div className='text-center'>
                                                <h1 className='namep'>
                                                    {pokemon.name}
                                                </h1>
                                                <p className='heightp'>
                                                    {pokemon.height}0 cm
                                                </p>
                                            </div>
                                            {/* <table className="table">
                                                <tbody className='text-white'>
                                                    <tr>
                                                    <th className='text-white'>Name</th>
                                                    <td>{pokemon.name}</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Height</th>
                                                    <td>{pokemon.height}</td>
                                                    </tr>
                                                </tbody>
                                            </table> */}
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <table className="table table-striped">
                                                    <tbody>
                                                        <tr className='table-success'>
                                                        <th>HP</th>
                                                        <td>{pokemon.stats[0].base_stat}</td>
                                                        </tr>
                                                        <tr className='table-danger'>
                                                        <th>ATT</th>
                                                        <td>{pokemon.stats[1].base_stat}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='col-md-6'>
                                                <table className="table">
                                                    <tbody>
                                                        <tr className='table-primary'>
                                                        <th>SPD</th>
                                                        <td>{pokemon.stats[5].base_stat}</td>
                                                        </tr>
                                                        <tr className='table-warning'>
                                                        <th>DEF</th>
                                                        <td>{pokemon.stats[2].base_stat}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Bag;
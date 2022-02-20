import './Bag.css'
import { useState } from "react";
import { Link } from 'react-router-dom';

const Bag = ({pokemon, id, name, image, type, height, hp, att, spd, def, searchPoke, setSearchPoke, catchPoke, catchPokemon, releasePokemon}) => {
    return(
        <div className='col'>

            <div className='baag' >
                
                <div className='bag-content'>
                    <div className='detail-poke'>
                        <div className="card text-center text-black pb-3 pt-1 ps-3 pe-3">
                            <div className="card-body">
                                <div className='row mb-2'>
                                    <div className='col btn btn-light btn-outline-dark text-black' disabled>
                                        {id}
                                    </div>
                                    <div className='col btn btn-secondary btn-outline-dark text-white' disabled>
                                        {type}
                                    </div>
                                    <div className='col'>
                                        <button 
                                        className='remove btn btn-danger btn-outline-dark text-white' 
                                        onClick={() => releasePokemon(pokemon.id)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='imeg'>
                                        <img src={image} className="img-fluid" alt="..."></img>
                                    </div>
                                </div>
                                <div className='row infod'>
                                    <div className='col'>
                                        <div className='row'>
                                            <table className="table table-striped">
                                                <tbody>
                                                    <tr>
                                                    <th>Name</th>
                                                    <td>{name}</td>
                                                    </tr>
                                                    <tr>
                                                    <th>Height</th>
                                                    <td>{height}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <table className="table table-striped">
                                                    <tbody>
                                                        <tr className='table-success'>
                                                        <th>HP</th>
                                                        <td>{hp}</td>
                                                        </tr>
                                                        <tr className='table-danger'>
                                                        <th>Att</th>
                                                        <td>{att}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='col-md-6'>
                                                <table className="table">
                                                    <tbody>
                                                        <tr className='table-primary'>
                                                        <th>Spd</th>
                                                        <td>{spd}</td>
                                                        </tr>
                                                        <tr className='table-warning'>
                                                        <th>Def</th>
                                                        <td>{def}</td>
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
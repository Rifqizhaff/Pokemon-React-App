import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Pokemon = ({pokemon, id, name, image, type, height, hp, att, spd, def, searchPoke, setSearchPoke, catchPoke, catchPokemon}) => {
    // const [searchPoke, setSearchPoke] = useState("");
    const [text, setText] = useState("");

    function handleChange(e) {
        setText(e.target.value);
      }

    function handleSubmit(e) {
        e.preventDefault();
        setSearchPoke(text);
        // setText("");
    }

    return(
        <div className='col'>

            <div className='pokepage mb-5'>
            
                <div className='pokeList mt-5'>
                    <div className='poke-content'>
                        <div className="card text-center text-black pb-3 pt-3 ps-3 pe-3">
                            <div className="card-body">
                                <div className='row'>
                                    <div className='col-6'>
                                        <div className='row'>
                                                        <table className="table table-striped">
                                                            <tbody>
                                                                <tr>
                                                                <th>ID</th>
                                                                <td>#0{id}</td>
                                                                </tr>
                                                                <tr>
                                                                <th>Name</th>
                                                                <td>{name}</td>
                                                                </tr>
                                                                <tr>
                                                                <th>Type</th>
                                                                <td>{type}</td>
                                                                </tr>
                                                                <tr>
                                                                <th>Height</th>
                                                                <td>{height}0 cm</td>
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
                                    <div className='col-6'>
                                        <div className='imeg'>
                                            <img src={image} alt={name} className="img-fluid"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='button-group mb-5'>
                    <button type="button" className="btn1 btn btn-light btn-lg btn-outline-secondary me-5 mt-4 mb-3">Clear</button>
                    <button 
                    type="button" 
                    className="btn2 btn btn-warning btn-lg btn-outline-secondary ms-5 mt-4 mb-3"
                    onClick={()=>catchPokemon(pokemon)}
                    >
                        Catch
                    </button>
                </div>
                

            </div>
        </div>
    );
}

export default Pokemon;

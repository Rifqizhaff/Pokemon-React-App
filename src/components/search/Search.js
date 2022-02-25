import React, { Component, useEffect, useState } from 'react';
import Bag from "../bag-page/Bag";
import axios from 'axios';
import { Alert } from "react-alert";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Search.css'

const Search = () => {

    const [allPokemons, setAllPokemons] = useState([]);
    const [catchPoke, setCatchPoke] = useState([]);
    const [text, setText] = useState("");
    const [isSearched, setIsSearched] = useState(false);
    const [count, setCount] = useState(0);
    
    
    function handleSubmit(e) {
        e.preventDefault();
        getAllPokemons();
    }

    const getAllPokemons = async () => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`)
        .then(res => {
            setAllPokemons(res.data);
            setIsSearched(true);
            // console.log(isSearched);
            // console.log(res.data);
            // console.log(allPokemons);
        })
        .catch(function (error) {
            if (error.response) {
                alert("Pokemon Does Not Exist!");
            } else if (error.request) {
                alert("Pokemon Does Not Exist!");
            } else {
                alert("Pokemon Does Not Exist!");
            }
            alert("Pokemon Does Not Exist!");
          });
    }
    
    useEffect(()=> {
        setCatchPoke(JSON.parse( localStorage.getItem("pokemons")));
        setCount(JSON.parse(localStorage.getItem("count")));
    }, []);

    useEffect(()=> {
        localStorage.setItem("pokemons", JSON.stringify(catchPoke));
        localStorage.setItem("count", JSON.stringify(count));
    }, [catchPoke]);

  
  
    const catchPokemon = (pokemon) => {
        if(count != 6){
            setCatchPoke(state => {
              const pokeExist = (state.filter(p => pokemon.id === p.id).length > 0);
              if (!pokeExist) {
                  
                  state = [...state, pokemon]
                  setCount(count - 1);
                  state.sort(function (a, b) {
                  return a.id - b.id
                })
                alert("Success Catching a Pokemon!");
                setCount(count + 1);
              }
              if(pokeExist) {
                alert("Already Catch this Pokemon!");
                }
              return state
            })
        }
        else {
            alert("Bag Already has 6 Pokemons!");
        }
        // console.log(catchPoke);
        console.log("count poke catched:" + count);
    };

    const releasePokemon = (id) => {
      setCatchPoke(state => state.filter(poke => poke.id !== id))
    }

    function handleClick() {
        setText("");
        setIsSearched(false);
        
    }
  
    
    // console.log(searchPoke);

    function isValid() {
        if(isSearched === true){
            return (
                <div>
                    <div className='pokepage mb-5'>
                
                        <div className='pokeList mt-5'>
                            <div className='poke-content'>
                                <div className="card text-center border-dark text-black pb-3 pt-3 ps-3 pe-3">
                                    <div className="card-body">
                                        <div className='row'>
                                            <div className='pkcont col-6'>
                                                <div className='row'>
                                                                <table className="table table-striped">
                                                                    <tbody>
                                                                        <tr>
                                                                        <th>ID</th>
                                                                        <td>#0{allPokemons.id}</td>
                                                                        </tr>
                                                                        <tr>
                                                                        <th>Name</th>
                                                                        <td>{allPokemons.name}</td>
                                                                        </tr>
                                                                        <tr>
                                                                        <th>Type</th>
                                                                        <td>{allPokemons.types[0].type.name}</td>
                                                                        </tr>
                                                                        <tr>
                                                                        <th>Height</th>
                                                                        <td>{allPokemons.height}0 cm</td>
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
                                                                            <td>{allPokemons.stats[0].base_stat}</td>
                                                                            </tr>
                                                                            <tr className='table-danger'>
                                                                            <th>Att</th>
                                                                            <td>{allPokemons.stats[1].base_stat}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div className='col-md-6'>
                                                                    <table className="table">
                                                                        <tbody>
                                                                            <tr className='table-primary'>
                                                                            <th>Spd</th>
                                                                            <td>{allPokemons.stats[5].base_stat}</td>
                                                                            </tr>
                                                                            <tr className='table-warning'>
                                                                            <th>Def</th>
                                                                            <td>{allPokemons.stats[2].base_stat}</td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                </div>
                                            </div>
                                            <div className='imcont col-6'>
                                                <div className='ins'>
                                                    <div className='imeg container-fluid'>
                                                        <img src={allPokemons.sprites.other.dream_world.front_default} alt="" className="img-fluid"></img>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='button-group mb-5'>
                            <button 
                            type="button" 
                            className="btn1 btn btn-light btn-lg btn-outline-secondary me-5 mt-4 mb-3"
                            onClick={()=>handleClick()}
                            >
                                Clear
                            </button>
                            <button 
                            type="button" 
                            className="btn2 btn btn-warning btn-lg btn-outline-secondary ms-5 mt-4 mb-3"
                            onClick={()=>
                                catchPokemon(allPokemons)
                            }
                            >
                                Catch
                            </button>
                        </div>
                        

                    </div>
                </div>
                
            )
        }
        // return <h1>test</h1>
    }

    return (
        <div className="apps">
        <div className="content">
          
          <main>
          <div className='bag-navb mb-5'>
                    <button 
                    type="button" 
                    className="btn btn-secondary btn-outline-dark"
                    // onClick={()=> handleBag()}
                    // {
                    //     pathname: "/api/v2/bag",
                    //     catchedPoke: catchPoke
                    // }
                    >
                        <a className="nav-link" >
                            <Link to='/bag'> 
                                BAG 
                            </Link>
                        </a>
                    </button>
                </div>
                <div className='searchB'>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        placeholder='Search...' 
                        value={text}
                        onChange={(e)=>{
                            setText(e.target.value);
                            // console.log(text);
                        }}
                        >
                        </input>
                        <input type="submit" value="Search"></input>
                    </form>
                </div>

                <div>
                    {isValid()}
                </div>

          </main>
        </div>
      </div>
    );
  }
  
export default Search;
// export {catchPoke};
//   export setCatchPoke

// export {catchPoke, setCatchPoke, catchPokemon, releasePokemon};

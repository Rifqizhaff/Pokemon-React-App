import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Bag from "./components/bag-page/Bag";
import Pokemon, {searchPoke, setSearchPoke} from "./components/pokemonn/Pokemon";
import './App.css';


function App() {

  const [allPokemons, setAllPokemons] = useState([])
  const [loadPoke, setLoadPoke] = useState('https://pokeapi.co/api/v2/pokemon?limit=1126')
  const [searchPoke, setSearchPoke] = useState("bulbasaur");
  const [catchPoke, setCatchPoke] = useState([])
  const [text, setText] = useState("");

  const getAllPokemons = async () => {
    const res = await fetch(loadPoke)
    const data =await res.json()

    setLoadPoke(data.next)

    function createPokemonObject (results) {
      results.forEach( async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()

        setAllPokemons(currentList => [...currentList, data])
      })
    }
    createPokemonObject(data.results)
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  useEffect(() => {
    getCatchedPokemons()
  }, [])

  const getCatchedPokemons = () => {
    allPokemons.filter((value) =>{
      if(searchPoke == ""){
        return console.log("Empty!!");
      } else if (value.name.toLowerCase().includes(searchPoke.toLowerCase())){
        console.log(value);
        return value;
      }
    })
  }

  const catchPokemon = (pokemon) => {
    setCatchPoke(state => {
      const monExist = (state.filter(p => pokemon.id == p.id).length > 0);
      if (!monExist) {
        state = [...state, pokemon]
        state.sort(function (a, b) {
          return a.id - b.id
        })
      }
      return state
    })
  }
  const releasePokemon = (id) => {
    setCatchPoke(state => state.filter(poke => poke.id !=id))
  }

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
      e.preventDefault();
      setSearchPoke(text);
      // setText("");
  }

  console.log(catchPoke);


  return (
    <Router>
      <div className="apps">
        <div className="content">
          
          <main>
              <Switch>
                <Route exact path="/">
                  <Index />
                </Route>
                <Route exact path="/api/v2/pokemon">
                <div className='bag-navb mb-5'>
                    <button type="button" class="btn btn-secondary">
                        <a className="nav-link" ><Link to='/api/v2/bag'> BAG </Link></a>
                    </button>
                </div>
                <div className='searchB'>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="text" 
                        placeholder='Search...' 
                        value={text}
                        onChange={handleChange}
                        >
                        
                        </input>
                        <input type="submit" value="Search"></input>
                        {/* searchPoke: {searchPoke} */}
                    </form>
                </div>
                { allPokemons.filter((val) =>{
                  if(searchPoke == ""){
                    return <h2>err</h2>
                  } else if (val.name.toLowerCase().includes(searchPoke.toLowerCase())){
                    return val
                  }
                }).map((pokemon, index) => 
                  <Pokemon 
                    pokemon={pokemon}
                    id={pokemon.id}
                    name={pokemon.name}
                    image={pokemon.sprites.other.dream_world.front_default}
                    height={pokemon.height}
                    type={pokemon.types[0].type.name}
                    key={index}
                    hp={pokemon.stats[0].base_stat}
                    att={pokemon.stats[1].base_stat}
                    def={pokemon.stats[2].base_stat}
                    spd={pokemon.stats[5].base_stat}
                    searchPoke={searchPoke}
                    setSearchPoke={setSearchPoke}
                    allPokemons={allPokemons}
                    setAllPokemons={setAllPokemons}
                    catchPoke={catchPoke}
                    catchPokemon={catchPokemon}
                  />  
                )}
                </Route>
                <Route exact path="/api/v2/bag">
                <div className='bag-navb'>
                    <button type="button" class="btn btn-secondary">
                        <a className="nav-link" ><Link to='/api/v2/pokemon'> BACK </Link></a>
                    </button>
                </div>
                <div className='poke-content'>
                  <div className='row'>

                    { catchPoke.map((pokemon, index) => 
                      <Bag 
                        pokemon={pokemon}
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        height={pokemon.height}
                        type={pokemon.types[0].type.name}
                        key={index}
                        hp={pokemon.stats[0].base_stat}
                        att={pokemon.stats[1].base_stat}
                        def={pokemon.stats[2].base_stat}
                        spd={pokemon.stats[5].base_stat}
                        searchPoke={searchPoke}
                        setSearchPoke={setSearchPoke}
                        allPokemons={allPokemons}
                        setAllPokemons={setAllPokemons}
                        catchPoke={catchPoke}
                        catchPokemon={catchPokemon}
                        releasePokemon={releasePokemon}
                      />  
                    )}
                  </div>
                </div>
                </Route>
                <Route>
                  <NoMatch />
                </Route>
              </Switch>
              
          </main>
        </div>
      </div>
    </Router>
  );
}

function Index() {
  return(
    <div className="indexbtn mt-5 pt-5">
      <a className="btn btn-primary btn-lg mt-5" href="#" role="button">
        <Link to='/api/v2/pokemon'> Start Pokemon App </Link>
      </a>
      <br></br>
      <br></br>

  
    </div>
  );

}


function NoMatch() {
  return <h2>404, Halaman tidak ditemukan!</h2>;
}


export default App;

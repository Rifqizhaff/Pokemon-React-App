import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Bag from "./components/bag-page/Bag";
import Search, {allPokemons, setAllPokemons, text, setText, catchPokemon, releasePokemon} from "./components/search/Search";
import localForage from 'localforage';
import './App.css';
import { types } from 'react-alert';


function App() {
  
  const [bagPoke, setBagPoke] = useState([]);
  const [pokeCount, setPokeCount] = useState(0);

    // useEffect(()=> {
    //     setBagPoke(JSON.parse( localStorage.getItem("pokemons")));
    //     setPokeCount(JSON.parse(localStorage.getItem("count")));
    // }, []);

  useEffect( () => {
      const getForage = async () => {
          try {
              const _pokemon = await localForage.getItem("Fora");
              setBagPoke(_pokemon);
              setPokeCount(_pokemon.length);
          } catch (e) {
              console.log('error coy!')
          }
      }
      getForage();

  }, []);

  // function callBag(){
  //   if(bagPoke.length !== 0){
  //     console.log("bag")
  //   } else {
  //     console.log("search")
  //   }
  // }

  return (
    <Router>
      <div className="apps">
        <div className="content">
          
          <main>
              <Switch>
                <Route exact path="/">
                  <Search />
                </Route>
                <Route exact path="/bag">
                  <div className='bag-navb'>
                      <button type="button" className="btn btn-secondary btn-outline-dark mb-3">
                          <a className="nav-link" ><Link to='/'> BACK </Link></a>
                      </button>
                  </div>
                  <div className='poke-content mb-5'>
                    <div className='row'>
                      {/* {callBag()} */}
                    { bagPoke.map((pokemon, index) => 
                      <Bag 
                        pokemon={pokemon}
                        key={index}
                        bagPoke={bagPoke}
                        setBagPoke={setBagPoke}
                        pokeCount={pokeCount}
                        setPokeCount={setPokeCount}
                        id={pokemon.id}
                        name={pokemon.name}
                        type={pokemon.types[0].type.name}
                        height={pokemon.height}
                        hp={pokemon.stats[0].base_stat}
                        att={pokemon.stats[1].base_stat}
                        def={pokemon.stats[2].base_stat}
                        spd={pokemon.stats[5].base_stat}
                        img={pokemon.sprites.other.dream_world.front_default}
                      />  
                    )} 
                    </div>
                  </div>
                  {/* <Bag />  */}
                </Route>
              </Switch>
              
          </main>
        </div>
      </div>
    </Router>
  );
}



export default App;

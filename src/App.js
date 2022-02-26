import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Bag from "./components/bag-page/Bag";
import Search, {allPokemons, setAllPokemons, text, setText, catchPokemon, releasePokemon} from "./components/search/Search";
import './App.css';


function App() {
  
  const [bagPoke, setBagPoke] = useState([]);
  const [pokeCount, setPokeCount] = useState(0);

    useEffect(()=> {
        setBagPoke(JSON.parse( localStorage.getItem("pokemons")));
        setPokeCount(JSON.parse(localStorage.getItem("count")));
    }, []);

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
                      <button type="button" class="btn btn-secondary btn-outline-dark mb-3">
                          <a className="nav-link" ><Link to='/'> BACK </Link></a>
                      </button>
                  </div>
                  <div className='poke-content mb-5'>
                    <div className='row'>
                    { bagPoke.map((pokemon, index) => 
                      <Bag 
                        pokemon={pokemon}
                        key={index}
                        bagPoke={bagPoke}
                        setBagPoke={setBagPoke}
                        pokeCount={pokeCount}
                        setPokeCount={setPokeCount}
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

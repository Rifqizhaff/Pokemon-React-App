import './Homepage.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Bag from "../bag-page/Bag";
import Pokemon, {searchPoke, setSearchPoke} from "../pokemonn/Pokemon";

const Homepage = ({id, name, image, type, height, hp, att, spd, def, searchPoke, setSearchPoke, allPokemons}) => {
    return(
        <div className='homee'>
            
             
            <div className='home-content'>
                
                <div className='button-group mb-5'>
                    <button type="button" className="btn1 btn btn-light btn-lg btn-outline-secondary me-5 mt-4 mb-3">Clear</button>
                    <button type="button" className="btn2 btn btn-warning btn-lg btn-outline-secondary ms-5 mt-4 mb-3">Catch</button>
                </div>
            </div>
        </div>
    );
}
export default Homepage;
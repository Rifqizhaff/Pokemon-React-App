import './Bag.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import * as localForage from 'localforage';

// {pokemon, id, name, image, type, height, hp, att, spd, def, catchPoke, setCatchPoke, catchPokemon, releasePokemon}

const Bag = ({bagPoke, setBagPoke, pokeCount, setPokeCount, 
            id,
            name,
            type,
            height,
            hp,
            att,
            spd,
            def,
            img}) => {

    // const [pokeCount, setPokeCount] = useState(0);

    const releasePokemon = (id) => {
        setBagPoke(state => state.filter(poke => poke.id !== id))
        setPokeCount(pokeCount - 1);
    }

    // useEffect(()=> {
    //     setBagPoke(JSON.parse( localStorage.getItem("pokemons")));
    //     setPokeCount(JSON.parse(localStorage.getItem("count")));
    // }, []);

    // useEffect(()=> {
    //     localStorage.setItem("pokemons", JSON.stringify(bagPoke));
    //     localStorage.setItem("count", JSON.stringify(pokeCount));
    // }, [bagPoke]);

    // -----------------------------------------------
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

    useEffect(()=> {
        if(bagPoke && bagPoke.length !== 0){
            localForage.setItem("Fora", bagPoke);
            // console.log("success set forage");
        }
    }, [bagPoke]);

    function HPstyling(){
        // console.log(`p${hp}`)
        if(hp>50){
            return `up50`
        } else {
            return 'down50'
        }
    }
    function ATTstyling(){
        // console.log(`p${hp}`)
        if(att>50){
            return `up50`
        } else {
            return 'down50'
        }
    }
    function DEFstyling(){
        // console.log(`p${hp}`)
        if(def>50){
            return `up50`
        } else {
            return 'down50'
        }
    }
    function SPDstyling(){
        // console.log(`p${hp}`)
        if(spd>50){
            return `up50`
        } else {
            return 'down50'
        }
    }
    
    return(
        <div className='col-4'>
            <div className='baag' >
                
                <div className='bag-content'>
                    <div className='detail-poke'>
                        <div className="card text-center border-dark pb-2 pt-2 ps-2 pe-2">
                            <div className='bgimg'>
                                <img src={img}></img>
                            </div>
                            <div className="card-body">
                                <div className='row mb-1'>
                                    <div className='idp col btn btn-light btn-outline-dark text-black' disabled>
                                        {id}
                                    </div>
                                    <div className='typ col btn btn-secondary btn-outline-dark text-white' disabled>
                                        {type}
                                    </div>
                                    <div className='col'>
                                        <button 
                                        className='rmp remove btn btn-danger btn-outline-dark text-white' 
                                        onClick={() => releasePokemon(id)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                </div>
                                <div className='row mb-3'>
                                    <div className='imeg container-fluid'>
                                        <img src={img} className="img-fluid" alt="..."></img>
                                    </div>
                                </div>
                                <div className='row infod'>
                                    <div className='col'>
                                        <div className='row'>
                                            <div className='text-center'>
                                                <h1 className='namep'>
                                                    {name}
                                                </h1>
                                                <p className='heightp'>
                                                    {height}0 cm
                                                </p>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <table className="table table-striped">
                                                    <tbody>
                                                        <tr className='table-success'>
                                                        <th>HP</th>
                                                        <td id={ HPstyling() }>{hp}</td>
                                                        </tr>
                                                        <tr className='table-danger'>
                                                        <th>ATT</th>
                                                        <td id={ ATTstyling() }>{att}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='col-md-6'>
                                                <table className="table">
                                                    <tbody>
                                                        <tr className='table-primary'>
                                                        <th>SPD</th>
                                                        <td id={ SPDstyling() }>{spd}</td>
                                                        </tr>
                                                        <tr className='table-warning'>
                                                        <th>DEF</th>
                                                        <td id={ DEFstyling() }>{def}</td>
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
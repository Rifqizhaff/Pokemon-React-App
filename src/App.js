import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Todo from "./components/todo/Todo";
import './App.css';
import { Button, Navbar, Form } from 'react-bootstrap';


const App = () => {
  return (
    <Router>
      <div className="apps">
        <h1>Simple To-Do-List App</h1>
        <h5>- by Rifqi -</h5>
        
        <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
        </nav>
        
        {/* <Home /> */}
        <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
            
        </main>

      
      </div>
    </Router>
  );
}

function Home() {
  return(
    <div>
      <Todo />
    </div>
  );

}

function About() {
  return <h2> ini page about</h2>;

}

function NoMatch() {
  return <h2>404, Halaman tidak ditemukan!</h2>;
}


export default App;

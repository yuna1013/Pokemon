import React from 'react';
import './App.css';
import {Switch, Route, NavLink, Redirect } from "react-router-dom";
import PokemonList from "./containers/PokemonList";
import Pokemon from "./containers/Pokemon";


function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to ={"/pokemon/test"}>Search</NavLink>
        </nav>
      <Switch>
        <Route path = {"/"} exact component = {PokemonList} />
        <Route path = {"/pokemon/:pokemon"} exact component = {Pokemon} />
        {/* /pokemon/test */} 
        <Redirect to={"/"} />
        </Switch>
      
    </div>
  );
}

export default App;

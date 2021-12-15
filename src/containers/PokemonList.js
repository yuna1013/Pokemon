import _ from "lodash";
import React, { useState } from "react";
import { GetPokemonList } from "../actions/pokemonActions"; 
import {useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";

const PokemonList = (props)=> { 
    const [Search, setSearch] = useState("")
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.PokemonList);
    React.useEffect(() => {
        FetchData(1)
    },[]);

    const FetchData = (page = 1) => {
        dispatch(GetPokemonList(page))
    }  
   const ShowData =() => {
    if (pokemonList.loading) {
        return <p>loading...</p>
    }
    if (!_.isEmpty(pokemonList.data)){
                return (
                <div className = {"list-wrapper"}>
                        {pokemonList.data.map(el => {
                            return (
                                <div className ={"pokemon-item"}>
                                    <p>{el.name}</p>
                                    <Link to ={`/pokemon/${el.name}`}>View</Link>
                                    </div>
                            )
                        })}
                </div>
                )
            }
                    
                        
        
        if (pokemonList.errorMsg !== ""){
            return <p>pokemonList.errorMsg</p>
        }
        return <p>unable to get date</p>
    };
    return (
        <div>
            <div className = {"search-wrapper"}>
                <p>Search: </p>
                <input type ="text" onChange= {e => setSearch(e.target.value)}/>
                <button onClick = {() => props.history.push(`/pokemon/${Search}`)}>Search</button>
            </div>
            {ShowData()}
            {!_.isEmpty(pokemonList.data) && (
                <ReactPaginate
                pageCount = {Math.ceil( pokemonList.count / 15)}
                pageRangeDisplayed = {2}
                marginPageDisplayed = {1}
                onPageChange = {(data) => FetchData(data.selected +1)}
                />

            )}
        

        </div>
            )
}; 
export default PokemonList

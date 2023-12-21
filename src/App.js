import './App.css';
import movieData from "./movies.json";
import { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import {Routes, Route, Link } from "react-router-dom";
import Trailer from './components/Trailer';

function App() {
  const[movies,setMovies]=useState(movieData)
  const addMovie=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  console.log(movies)
  return ( <>
  <Link to="/add">add movie</Link>
  <h1>movie app</h1>

  <Routes>
         <Route path="/" element={<MovieList movies={movies}/>} />
         <Route path="/add" element={  <AddMovie addMovie={addMovie}/>} />
         <Route path="/trailer/:id" element={<Trailer movies={movies}/>}/>


          </Routes>
  </>
    
  );
}

export default App;

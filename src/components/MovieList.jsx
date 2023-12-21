import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList(props) {
  const { movies } = props;
  return (
    <div style={{ marginTop: "150px", display: "flex", flexWrap: "wrap" }}>
      {movies.map((movie,id) => (
        <MovieCard key={id} movie={movie} />
      ))}
    </div>
  );
}

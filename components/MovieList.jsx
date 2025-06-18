import axios from "axios";
import Card from "./card";
import { useState, useEffect } from "react";

const urlApi = import.meta.env.VITE_API_URL;

export default function MovieList() {
  // settaggio e fetch della api
  const [movies, setMovie] = useState([]);

  function fetchmovie() {
    axios.get(urlApi).then((res) => {
      setMovie(res.data);
      console.log(res.data);
    });
  }

  useEffect(fetchmovie, []);

  return (
    <>
      <div className="row g-3">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

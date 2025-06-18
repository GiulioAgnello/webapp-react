import { useParams } from "react-router";
import ReviewList from "../components/ReviewList";
import { useState, useEffect } from "react";
import axios from "axios";

// url
const urlApi = import.meta.env.VITE_API_URL;
const imagePath = import.meta.env.VITE_PATH_IMG;

export default function movieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  function fetchmovie() {
    axios.get(urlApi + id).then((res) => {
      setMovie(res.data);
      console.log(res.data);
    });
  }

  useEffect(fetchmovie, []);
  const { image, title, director, genre, abstract } = movie;

  return (
    <>
      <section>
        <div className="container  my-4">
          <img
            src={`${imagePath}${image}`}
            className="card-img-top"
            alt={movie.title}
          />
          <h1>{title}</h1>
          <p>{genre}</p>
          <p>{director}r</p>
          <p>{abstract}</p>
        </div>
      </section>

      <ReviewList />

      <section>
        <div className="container my-4">
          <h2>la tua recenzione</h2>
          <p>form per la recensione</p>
        </div>
      </section>
    </>
  );
}

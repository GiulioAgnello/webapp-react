import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";

// url
const urlApi = import.meta.env.VITE_API_URL;
const imagePath = import.meta.env.VITE_PATH_IMG;

export default function MovieDetail() {
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
          <div className="row">
            <div className="col-3">
              <img
                src={`${imagePath}${image}`}
                className="Showimage"
                alt={movie.title}
              />
            </div>
            <div className="col-9 ">
              <div className="description">
                <h1 className="titleShow text-uppercase text-center">
                  {title}
                </h1>
                <small>{genre}</small>
                <br />
                <small>{director}</small>
                <br />
                <br />
                <p>{abstract}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ReviewList />

      <section>
        <div className="container my-5 d-flex justify-content-center">
          <div className="row">
            <div className="col">
              <h2>Add a Revirew..</h2>
              <ReviewForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

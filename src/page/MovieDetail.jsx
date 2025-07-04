import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewList from "../components/ReviewList";
import ReviewForm from "../components/ReviewForm";
import { useLoader } from "../context/LoaderContext";

// url
const urlApi = import.meta.env.VITE_API_URL;
const imagePath = import.meta.env.VITE_PATH_IMG;

export default function MovieDetail() {
  // settaggio e fetch della api
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const { setIsLoading } = useLoader();

  function fetchmovie() {
    setIsLoading(true);
    axios.get(urlApi + id).then((res) => {
      setMovie(res.data);
      setIsLoading(false);
    });
  }

  useEffect(fetchmovie, []);
  const { image, title, director, genre, abstract, reviews } = movie;

  return (
    <>
      {movie ? (
        <>
          <section>
            <div className="container  my-4">
              <div className="row align-items-center">
                <div className="col-sm-12 col-xl-3  ">
                  <img
                    src={`${imagePath}${image}`}
                    className="img-fluid img-thumbnail"
                    alt={movie.title}
                  />
                </div>
                <div className="col-sm-12 col-xl-9 ">
                  <div className="description">
                    <h1 className="titleShow text-uppercase text-center">
                      {title}
                    </h1>
                    <small>Genre: {genre}</small>
                    <br />
                    <small>Director: {director}</small>
                    <br />
                    <br />
                    <p>Story: {abstract}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <ReviewList reviews={reviews} />
          <section>
            <div className="container my-5 d-flex justify-content-center">
              <div className="row">
                <div className="col">
                  <h2>Add a Revirew..</h2>
                  <ReviewForm movie_id={id} refreshMovie={fetchmovie} />
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <h1 className="container my-5">Loading.....</h1>
      )}
    </>
  );
}

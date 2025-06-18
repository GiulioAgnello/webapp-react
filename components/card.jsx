import { Link } from "react-router";

const imagePath = import.meta.env.VITE_PATH_IMG;

export default function Card({ movie }) {
  const { id, image, title, director, genre, release_year, abstract } = movie;

  return (
    <>
      <div className="col-4">
        <div className="card ">
          <img
            src={`${imagePath}${image}`}
            className="card-img-top"
            alt={movie.title}
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>
              <small>{director}</small>
            </p>
            <p>
              <small>{genre}</small>
            </p>
            <p>
              <small>{release_year}</small>
            </p>
            <p className="card-text">{abstract}</p>
            <Link to={`/movies/${id}`} className="btn btn-primary">
              See more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

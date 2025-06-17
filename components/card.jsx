import { Link } from "react-router";

export default function Card({ movie }) {
  return (
    <>
      <div className="col-4">
        <div className="card">
          <img src={movie.image} className="card-img-top" alt={movie.title} />
          <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <p>
              <small>{movie.director}</small>
            </p>
            <p>
              <small>{movie.genre}</small>
            </p>
            <p>
              <small>{movie.release_year}</small>
            </p>
            <p className="card-text">{movie.abstract}</p>
            <Link href="/movie/1" className="btn btn-primary">
              See more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

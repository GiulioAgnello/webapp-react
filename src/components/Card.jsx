import { Link } from "react-router";

const imagePath = import.meta.env.VITE_PATH_IMG;

export default function Card({ movie }) {
  const { id, image, title, director, genre, release_year, abstract } = movie;

  return (
    <>
      <div className="col-12 col-sm-4 col-xl-3 ">
        <div className="card shadow p-3 m-3 bg-body-tertiary rounded ">
          <img
            src={`${imagePath}${image}`}
            className="img-fluid "
            alt={movie.title}
          />
          <div className="card-body p-3 ">
            <h5 className="card-title">{title}</h5>
            <p>
              {" "}
              Director :<small> {director}</small>
            </p>
            <p>
              Genre :<small> {genre}</small>
            </p>
            <p>
              Release :<small> {release_year}</small>
            </p>
            Abstract :<p className="card-text"> {abstract}</p>
            <Link to={`/movies/${id}`} className="btn btn-primary">
              See more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

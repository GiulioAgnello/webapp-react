import MovieList from "../components/movieList";

export default function HomePage() {
  return (
    <>
      <div className="container vh-100  justify-content-center ">
        <h1 className="text-center p-3">FILM</h1>
        <MovieList />
      </div>
    </>
  );
}

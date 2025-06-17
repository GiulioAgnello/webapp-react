import Card from "./card";

// example for movie array
const movies = [
  {
    id: 1,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2010,
    abstract:
      "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    image: "inception.jpg",
  },
  {
    id: 2,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2010,
    abstract:
      "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    image: "inception.jpg",
  },
  {
    id: 3,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2010,
    abstract:
      "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    image: "inception.jpg",
  },
  {
    id: 4,
    title: "Inception",
    director: "Christopher Nolan",
    genre: "Science Fiction",
    release_year: 2010,
    abstract:
      "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    image: "inception.jpg",
  },
];

export default function MovieList() {
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

import { useParams } from "react-router";

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
];

export default function movieDetail() {
  const { id = movies.id } = useParams();
  return (
    <>
      <h1>movie</h1>
    </>
  );
}

import { useParams } from "react-router";
import ReviewList from "../components/ReviewList";
// const movies = [
//   {
//     id: 1,
//     title: "Inception",
//     director: "Christopher Nolan",
//     genre: "Science Fiction",
//     release_year: 2010,
//     abstract:
//       "A skilled thief is given a chance at redemption if he can successfully perform inception.",
//     image: "inception.jpg",
//   },
// ];

export default function movieDetail() {
  const { id } = useParams();
  return (
    <>
      <section>
        <div className="container  my-4">
          <p>immagine</p>
          <h1>Title {id}</h1>
          <p>genre</p>
          <p>director</p>
          <p>descrizione</p>
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

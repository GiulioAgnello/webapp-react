// import { useParams } from "react-router";

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
  //   const { id = movies.id } = useParams();
  return (
    <>
      <div className="container my-2">
        <h1>movie</h1>

        <h2>review</h2>
        <p>descrizione</p>

        <h2>la tua recenzione</h2>
        <p>form per la recensione</p>
      </div>
    </>
  );
}

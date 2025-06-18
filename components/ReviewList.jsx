import ReviewCard from "./ReviewCard";

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";
// url
const urlApi = import.meta.env.VITE_API_URL;

export default function ReviewList() {
  const { id } = useParams();
  const [reviews, setreview] = useState([]);

  function fetchmovie() {
    axios.get(urlApi + id).then((res) => {
      setreview(res.data.reviews);
      console.log(res.data.reviews);
    });
  }

  useEffect(fetchmovie, []);

  return (
    <section>
      <div className="container my-2">
        <h2 className="text-center">REVIEWS</h2>
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
}

import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    vote: 5,
    name: "Andrea",
    text: "A mind-bending masterpiece.",
  },
  {
    id: 2,
    vote: 4,
    name: "franca",
    text: "Great visuals and a compelling story.",
  },
  {
    id: 3,
    vote: 3,
    name: "renato",
    text: "Confusing at times, but worth watching.",
  },
];

export default function ReviewList() {
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

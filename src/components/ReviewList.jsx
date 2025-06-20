import ReviewCard from "./ReviewCard";

export default function ReviewList({ reviews }) {
  return (
    <section>
      <div className="container my-2">
        <h2 className="text-center">REVIEWS</h2>
        <div className="reviewCard">
          {reviews &&
            reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
        </div>
      </div>
    </section>
  );
}

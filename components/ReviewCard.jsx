export default function ReviewCard({ review }) {
  return (
    <div className="d-flex py-2 justify-content-between border-bottom gap-2">
      <p>avatar</p>
      <p>{review.name}</p>
      <p>{review.text}</p>
      <p>{review.vote}</p>
    </div>
  );
}

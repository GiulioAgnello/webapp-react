export default function ReviewCard({ review }) {
  return (
    <div className="d-flex py-2 justify-content-between align-items-center border-bottom gap-2">
      <p className="avatar">U</p>
      <p className="card-username px-2">{review.name}</p>
      <p className="flex-grow-1">{review.text}</p>
      <p>{review.vote}</p>
    </div>
  );
}

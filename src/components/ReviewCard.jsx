import RatingStars from "./RatingStars";

export default function ReviewCard({ review }) {
  const { name, text, vote } = review;
  return (
    <div className="d-flex py-2 justify-content-between align-items-center border-bottom gap-2">
      <p className="avatar">{name[0]}</p>
      <p className="card-username px-2">{name}</p>
      <p className="flex-grow-1">{text}</p>
      <RatingStars vote={vote} />
    </div>
  );
}

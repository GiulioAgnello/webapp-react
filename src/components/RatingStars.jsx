import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function RatingStars({ vote, maxVote = 5 }) {
  const renderStars = () => {
    if (!vote) return "no vote for now";

    const stars = [];

    for (let i = 0; i < maxVote; i++) {
      stars.push(
        i < vote ? (
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#FFD43B" }} />
        ) : (
          <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#b0b0b0" }} />
        )
      );
    }
    return stars;
  };

  return <span className="text-nowrap">{renderStars()}</span>;
}

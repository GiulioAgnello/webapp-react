import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Loader({ setShow }) {
  if (!setShow) return <></>;

  return (
    <div className="loader">
      <FontAwesomeIcon icon={faCircleNotch} spin size="5x" />
    </div>
  );
}

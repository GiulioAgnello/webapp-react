import axios from "axios";
import { useState, useEffect } from "react";

const dataDefault = { name: "", vote: 0, text: "", policy: false };

export default function reviewForm({ movie_id, refreshMovie }) {
  const urlApi = import.meta.env.VITE_API_URL + movie_id + "/reviews";

  const [formData, setFormData] = useState(dataDefault);

  const fetchReviewAdd = () => {
    axios.post(urlApi, formData).then((res) => {
      refreshMovie();
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchReviewAdd();
    setFormData(dataDefault);
  };

  const handleControl = (e) => {
    if (e.target.type === "checkbox") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.checked,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="nameImput" className="form-label">
              Name
            </label>
            <input
              onChange={handleControl}
              name="name"
              value={formData.name}
              type="text"
              className="form-control"
              id="nameImput"
              required
            />
          </div>
        </div>
        <div className="col-6">
          <div className="mb-3">
            <label htmlFor="voteInput" className="form-label">
              Vote
            </label>
            <input
              onChange={handleControl}
              name="vote"
              value={formData.vote}
              type="number"
              className="form-control"
              id="voteInput"
              min={1}
              max={10}
              step={1}
              required
            />
          </div>
        </div>
        <div className="col">
          <div className="mb-3">
            <label htmlFor="textIput" className="form-label">
              Write your review here...
            </label>
            <textarea
              onChange={handleControl}
              name="text"
              value={formData.text}
              className="form-control"
              id="textIput"
              rows="3"
              required
            />
          </div>
        </div>
      </div>

      <div className="mb-3 form-check">
        <input
          checked={formData.policy}
          onChange={handleControl}
          type="checkbox"
          className="form-check-input"
          id="policy"
          name="policy"
          required
        />
        <label className="form-check-label" htmlFor="policy">
          Accept <a href="#">terms & conditions</a>
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
  );
}

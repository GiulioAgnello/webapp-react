import { useState } from "react";

const dataDefault = { name: "", vote: 0, text: "", cheched: false };

export default function reviewForm() {
  const [formData, setFormData] = useState(dataDefault);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleControl = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
            ></textarea>
          </div>
        </div>
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          accept <a to="#">terms & conditions</a> first
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

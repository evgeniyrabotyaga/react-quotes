import { Link } from "react-router-dom";

const NoQuotes = () => {
  return (
    <div className="err-container">
      <p className="err-text">No quotes found!</p>
      <Link className="add-btn" to="/add">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotes;

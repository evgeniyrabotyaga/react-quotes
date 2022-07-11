import { Link } from "react-router-dom";

const QuoteItem = (props) => {
  return (
    <li className="quote">
      <div className="quote__text">
        <h2>{props.text}</h2>
        <p>{props.author}</p>
      </div>
      <Link className="quote__btn" to={`/quotes/${props.id}`}>
        View Fullscreen
      </Link>
    </li>
  );
};

export default QuoteItem;

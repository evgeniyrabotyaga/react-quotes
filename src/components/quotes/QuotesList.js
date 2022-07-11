import QuoteItem from "./QuoteItem";

const QuotesList = (props) => {
  return (
    <ul className="quote__list">
      {props.quotes.map((item) => (
        <QuoteItem
          key={item.id}
          text={item.text}
          id={item.id}
          author={item.author}
        />
      ))}
    </ul>
  );
};

export default QuotesList;

const FullScreenQuote = (props) => {
  return (
    <div className="fullscreen-quote">
      <h2>{props.text}</h2>
      <p>{props.author}</p>
    </div>
  );
};

export default FullScreenQuote;

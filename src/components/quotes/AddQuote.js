import { useState } from "react";
import useInput from "../hooks/useInput";

const AddQoute = (props) => {
  const {
    value: authorValue,
    valid: authorIsValid,
    hasError: authorHasError,
    inputBlurHandler: authorBlurHandler,
    inputChangeHandler: authorChangeHandler,
    reset: authorReset,
  } = useInput((author) => author.trim().length > 5);

  const {
    value: textValue,
    valid: textIsValid,
    hasError: textHasError,
    inputBlurHandler: textBlurHandler,
    inputChangeHandler: textChangeHandler,
    reset: textReset,
  } = useInput((text) => text.trim().length > 10);

  let formIsValid = false;
  if (authorIsValid && textIsValid) formIsValid = true;

  const submitFormHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) return;
    props.onAddQuote({ author: authorValue, text: textValue });
  };

  return (
    <form onSubmit={submitFormHandler} className="new-quote">
      <div className="new-quote__input">
        <label htmlFor="author">Author</label>
        <input
          onBlur={authorBlurHandler}
          onChange={authorChangeHandler}
          id="author"
          type="text"
          value={authorValue}
        ></input>
        {authorHasError && (
          <p className="new-quote__error">
            Name input is invalid. It should be at least 6 characters long.
          </p>
        )}
      </div>
      <div className="new-quote__input">
        <label htmlFor="text">Text</label>
        <textarea
          className="new-quote__height"
          id="text"
          type="text"
          onChange={textChangeHandler}
          onBlur={textBlurHandler}
          value={textValue}
        ></textarea>
        {textHasError && (
          <p className="new-quote__error">
            Text input is invalid. It should be at least 11 characters long.
          </p>
        )}
      </div>
      <button disabled={!formIsValid} className="new-quote__btn" type="submit">
        Add Quote
      </button>
    </form>
  );
};

export default AddQoute;

import useHttp from "../hooks/use-http";
import useInput from "../hooks/useInput";
import { useEffect } from "react";
import { addComment } from "../../lib/api";

const NewCommentForm = (props) => {
  const {
    value: addedComment,
    valid: commentCorrect,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset,
  } = useInput((comment) => comment.trim().length > 6);
  let formIsValid = false;
  if (commentCorrect) formIsValid = true;

  const { sendRequest, status, error } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed" && !error) {
      props.onAddComment();
    }
  }, [props.onAddComment, status, error]);

  const submitFormHandler = (event) => {
    event.preventDefault();
    sendRequest({
      commentData: { text: addedComment },
      quoteId: props.quoteId,
    });
    reset();
  };

  return (
    <form onSubmit={submitFormHandler} className="comment-form">
      <label className="comment-form__title" htmlFor="comment">
        Your Comment
      </label>
      <textarea
        value={addedComment}
        onBlur={inputBlurHandler}
        onChange={inputChangeHandler}
        id="comment"
      ></textarea>
      {hasError && (
        <p className="new-quote__error">
          Your comment is invalid. It should be at least 7 characters long.
        </p>
      )}
      <button disabled={!formIsValid} type="submit" className="comments__btn">
        Add Comment
      </button>
    </form>
  );
};

export default NewCommentForm;

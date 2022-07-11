import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList";

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();

  const { quoteId } = params;

  const { sendRequest, data, status } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = useCallback(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  let comments;

  if (status === "pending") {
    comments = (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && data && data.length > 0) {
    comments = <CommentsList comments={data} />;
  }

  if (status === "completed" && (!data || data.length === 0)) {
    comments = <p className="err-text">No comments were added yet!</p>;
  }

  return (
    <div className="comments">
      <h2 className="comments__title">User Comments</h2>
      {!isAddingComment && (
        <button onClick={startAddCommentHandler} className="comments__btn mb">
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm quoteId={quoteId} onAddComment={addCommentHandler} />
      )}

      {comments}
    </div>
  );
};

export default Comments;

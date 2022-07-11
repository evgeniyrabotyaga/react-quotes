import CommentItem from "./CommentItem";

const CommentsList = (props) => {
  return (
    <ul className="comment__list">
      {props.comments.map((comment) => (
        <CommentItem key={comment.id} text={comment.text} />
      ))}
    </ul>
  );
};

export default CommentsList;

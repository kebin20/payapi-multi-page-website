import { useRef } from "react";
import ReviewData from "../../models";

function NewReviewForm({
  onAddReview,
}: {
  onAddReview: (reviewData: ReviewData) => void;
}) {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);
  const commentInputRef = useRef<HTMLTextAreaElement>(null);

  function submitHandler(event: { preventDefault: () => void }) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current?.value;
    const enteredName = nameInputRef.current?.value;
    const enteredDate = dateInputRef.current?.value;
    const enteredComment = commentInputRef.current?.value;

    const reviewData = {
      title: enteredTitle,
      name: enteredName,
      date: enteredDate,
      comment: enteredComment,
    };

    onAddReview(reviewData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="title">Review Title:</label>
        <input type="text" required id="title" ref={titleInputRef} />
      </div>
      <div>
        <label htmlFor="image">Full Name:</label>
        <input type="text" required id="name" ref={nameInputRef} />
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input type="text" required id="date" ref={dateInputRef} />
      </div>
      <div>
        <label htmlFor="comment">New Comment:</label>
        <textarea
          id="description"
          required
          rows={parseInt("5")}
          ref={commentInputRef}
        ></textarea>
      </div>
      <div>
        <button>Submit Review</button>
      </div>
    </form>
  );
}

export default NewReviewForm;

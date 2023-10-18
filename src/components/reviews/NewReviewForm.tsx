import { useRef } from "react";

function NewReviewForm({ onAddReview }) {
  const titleInputRef = useRef();
  const nameInputRef = useRef();
  const dateInputRef = useRef();
  const commentInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredDate = dateInputRef.current.value;
    const enteredComment = commentInputRef.current.value;

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
          rows="5"
          ref={commentInputRefInputRef}
        ></textarea>
      </div>
      <div>
        <button>Submit Review</button>
      </div>
    </form>
  );
}

export default NewReviewForm;

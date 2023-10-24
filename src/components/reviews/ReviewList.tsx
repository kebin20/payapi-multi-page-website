import ReviewItem from "./ReviewItem";

function ReviewList({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          id={review.id}
          title={review.title}
          name={review.name}
          comment={review.comment}
          date={review.date}
        />
      ))}
    </ul>
  );
}

export default ReviewList;
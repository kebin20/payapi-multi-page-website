import ReviewData from "@/models";
import ReviewItem from "./ReviewItem";

function ReviewList({ reviews }: { reviews: ReviewData }) {
  return (
    <ul>
      {reviews.map((review: ReviewData) => (
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

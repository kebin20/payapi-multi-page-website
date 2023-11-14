import {ReviewDataProps} from "@/models";
import ReviewItem from "./ReviewItem";

function ReviewList({ reviews }: { reviews: ReviewDataProps[] }) {
  return (
    <ul>
      {reviews.map((review: ReviewDataProps) => (
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

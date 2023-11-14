import { ReviewDataProps } from "@/models";
import { useRouter } from "next/router";

function ReviewItem({ id, title, name, comment, date }: ReviewDataProps) {
  const router = useRouter();

  function showFullReviewHandler() {
    router.push("/" + id);
  }

  return (
    <>
      <li>
        <h2>{title}</h2>
        <p>By {name}</p>
        <span>{date}</span>
        <p>{comment}</p>
        <button onClick={showFullReviewHandler}>See Full Review</button>
      </li>
    </>
  );
}

export default ReviewItem;

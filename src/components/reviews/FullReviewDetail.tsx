import { ReviewDataProps } from "../../models";

export default function FullReviewDetail({
  title,
  name,
  date,
  comment,
}: ReviewDataProps) {
  return (
    <>
      <h1>{title}</h1>
      <p>{name}</p>
      <span>{date}</span>
      <p>{comment}</p>
    </>
  );
}

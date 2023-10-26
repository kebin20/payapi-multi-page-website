import ReviewData from "../../models";

export default function FullReviewDetail({
  title,
  name,
  date,
  comment,
}: ReviewData) {
  return (
    <>
      <h1>{title}</h1>
      <p>{name}</p>
      <span>{date}</span>
      <p>{comment}</p>
    </>
  );
}

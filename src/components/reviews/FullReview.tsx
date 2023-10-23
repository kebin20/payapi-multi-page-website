export default function FullReviewDetail({
  stars,
  title,
  author,
  date,
  comment,
}) {
  return (
    <>
      <span>{stars}</span>
      <h1>{title}</h1>
      <p>{author}</p>
      <span>{date}</span>
      <p>{comment}</p>
    </>
  );
}

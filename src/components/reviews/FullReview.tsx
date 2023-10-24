export default function FullReviewDetail({
  title,
  author,
  date,
  comment,
}) {
  return (
    <>
      <h1>{title}</h1>
      <p>{author}</p>
      <span>{date}</span>
      <p>{comment}</p>
    </>
  );
}

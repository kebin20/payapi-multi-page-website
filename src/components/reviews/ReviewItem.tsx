function ReviewItem({ title, comment, date }) {
  return (
    <>
      <li>
        <h2>{title}</h2>
        <span>{date}</span>
        <p>{comment}</p>
      </li>
    </>
  );
}

export default ReviewItem;

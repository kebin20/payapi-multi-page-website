function ReviewItem({ title, name, comment, date }) {
  return (
    <>
      <li>
        <h2>{title}</h2>
        <p>By {name}</p>
        <span>{date}</span>
        <p>{comment}</p>
      </li>
    </>
  );
}

export default ReviewItem;

import { MongoClient } from "mongodb";

import ReviewList from "../components/reviews/ReviewList";
import { ReviewDataProps } from "@/models";

function Reviews(props: { reviews: ReviewDataProps[] }) {
  return (
    <>
      <h1>Testimonials</h1>
      <ReviewList reviews={props.reviews} />
    </>
  );
}

export default Reviews;

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://generaluser:1234@cluster0.ulhesxn.mongodb.net/?retryWrites=true&w=majority&ssl=true"
  );
  const db = client.db();

  const reviewsCollection = db.collection("reviews");

  const reviews = await reviewsCollection.find().toArray();

  client.close();

  return {
    props: {
      reviews: reviews.map((review) => ({
        title: review.title,
        name: review.name,
        comment: review.comment,
        date: review.date,
        id: review._id.toString(),
      })),
    },
  };
}

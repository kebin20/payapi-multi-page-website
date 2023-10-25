import { MongoClient } from "mongodb";

import ReviewList from "../components/reviews/ReviewList";

const DUMMY_REVIEWS = [
  {
    id: "r1",
    title: "Great API for your business needs",
    name: "Tanaka Taro",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum sunt optio nemo minus, ad ipsa obcaecati, tempora eaque voluptas sequi reprehenderit consectetur, nostrum amet praesentium et soluta sit quibusdam?",
    date: "September 1st 2023",
  },
  {
    id: "r2",
    title: "It's just an ok API",
    name: "Sakamoto Ken",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum sunt optio nemo minus, ad ipsa obcaecati, tempora eaque voluptas sequi reprehenderit consectetur, nostrum amet praesentium et soluta sit quibusdam?",
    date: "September 1st 2023",
  },
  {
    id: "r3",
    title: "DONT USE WARNING, CRASHED OUR SERVERS",
    name: "Fujiwara Tatsumi",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum sunt optio nemo minus, ad ipsa obcaecati, tempora eaque voluptas sequi reprehenderit consectetur, nostrum amet praesentium et soluta sit quibusdam?",
    date: "September 1st 2023",
  },
];

function Reviews(props) {
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
    "mongodb+srv://generaluser:1234@cluster0.ulhesxn.mongodb.net/?retryWrites=true&w=majority"
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

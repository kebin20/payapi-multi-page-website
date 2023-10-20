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
  return {
    props: {
      reviews: DUMMY_REVIEWS,
    },
  };
}

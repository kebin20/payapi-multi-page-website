import FullReviewDetail from "@/components/reviews/FullReviewDetail";
import { ReviewInterface } from "@/models";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

function FullReviewDetails(props: ReviewInterface) {
  return (
    <>
      <Head>
        <title>{props.reviewData.title}</title>
        <meta name="description" content={props.reviewData.comment} />
      </Head>

      <FullReviewDetail
        title={props.reviewData.title}
        name={props.reviewData.name}
        date={props.reviewData.date}
        comment={props.reviewData.comment}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ktanzyl:1234@reviewdata.dqz2kqn.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const reviewsCollection = db.collection("reviews");

  // If wanting to find all , can pass in an empty object, which means there's no filter criteria. Second argument can be passed which defines which fields should be extracted for every document.
  // In this case, we only want the id, so add in the params like below
  const reviews = await reviewsCollection
    .find({}, { projection: { _id: 1 } })
    .toArray();

  client.close();

  return {
    fallback: "blocking",
    paths: reviews.map((review) => ({
      params: { reviewId: review._id.toString() },
    })),
  };
}

export async function getStaticProps(context: {
  params: { reviewId: string };
}) {
  //fetch data for a single review
  const reviewId = context.params.reviewId;

  const client = await MongoClient.connect(
    "mongodb+srv://ktanzyl:1234@reviewdata.dqz2kqn.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();

  const reviewsCollection = db.collection("reviews");

  const selectedReview = await reviewsCollection.findOne({
    _id: new ObjectId(reviewId),
  });

  client.close();

  // Check if the review was not found
  if (!selectedReview) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      reviewData: {
        id: selectedReview._id.toString(),
        title: selectedReview.title,
        name: selectedReview.name,
        date: selectedReview.date,
        comment: selectedReview.comment,
      },
    },
  };
}

export default FullReviewDetails;

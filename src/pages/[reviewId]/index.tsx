import FullReviewDetail from "@/components/reviews/FullReview";

function FullReviewDetails() {
  return (
    <>
      <FullReviewDetail title="" author="" date="" comment="" />
    </>
  );
}

export async function getStaticProps(context) {
  //fetch data for a single review

  const reviewId = context.params.reviewId;

  console.log(reviewId);

  return {
    props: {
      reviewData: {
        id: reviewId,
        stars: "",
        title: "",
        author: "",
        date: "",
        comment: "",
      },
    },
  };
}

export default FullReviewDetails;

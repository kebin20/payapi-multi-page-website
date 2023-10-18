import NewReviewForm from "@/components/reviews/NewReviewForm";

function NewReviewPage() {
  function addReviewHandler(enteredReviewData) {
    console.log(enteredReviewData);
  }

  return <NewReviewForm onAddReview={addReviewHandler} />;
}

export default NewReviewPage;

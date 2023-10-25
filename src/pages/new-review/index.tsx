import { useRouter } from "next/router";

import NewReviewForm from "@/components/reviews/NewReviewForm";

function NewReviewPage() {
  const router = useRouter();

  async function addReviewHandler(enteredReviewData) {
    const response = await fetch("/api/new-review", {
      method: "POST",
      body: JSON.stringify(enteredReviewData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);

    router.push("/");
  }

  return <NewReviewForm onAddReview={addReviewHandler} />;
}

export default NewReviewPage;

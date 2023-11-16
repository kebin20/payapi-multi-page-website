import { useRouter } from "next/router";

import NewReviewForm from "@/components/reviews/NewReviewForm";
import Head from "next/head";
import { ReviewDataProps } from "@/models";

function NewReviewPage() {
  const router = useRouter();

  async function addReviewHandler(enteredReviewData: ReviewDataProps) {
    const response = await fetch("/api/new-review", {
      method: "POST",
      body: JSON.stringify(enteredReviewData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    router.push("/");
  }

  return (
    <>
      <Head>
        <title>Add a new review</title>
        <meta name="description" content="See what our clients have to say!" />
      </Head>
      <NewReviewForm onAddReview={addReviewHandler} />;
    </>
  );
}

export default NewReviewPage;

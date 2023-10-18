import { useRouter } from "next/router";

function SpecificBlogPage() {
  const router = useRouter();

  const blogId = router.query.blogId;

  console.log(blogId);

  return <h1>The Specific Blog Page</h1>;
}

export default SpecificBlogPage;

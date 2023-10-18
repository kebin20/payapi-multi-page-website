import { useRouter } from "next/router";

function BlogPage() {
  const router = useRouter();

  const blogId = router.query.blogId;

  console.log(blogId);

  return <h1>The Blog Page</h1>;
}

export default BlogPage;

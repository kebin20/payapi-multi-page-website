import Link from "next/link";

function BlogPage() {
  return (
    <>
      <h1>The Blog Page</h1>
      <ul>
        <li>
          <Link href={"/blog/blog-page1"}>Blog 1</Link>
          <Link href={"/blog/blog-page2"}>Blog 2</Link>
          <Link href={"/blog/blog-page3"}>Blog 3</Link>
        </li>
      </ul>
    </>
  );
}

export default BlogPage;

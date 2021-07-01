import Head from "next/head";
import fs from "fs";
import path from "path";

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
      </Head>
    </div>
  );
}

export const getStaticProps = async () => {
  // Get files from posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    console.log(markdownWithMeta);

    return { slug };
  });

  console.log(posts);
  return {
    props: {
      posts: "The posts",
    },
  };
};

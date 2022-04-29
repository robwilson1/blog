import path from "path";
import fs from "graceful-fs";

export type TPost = {
  filename: "string";
  data: {
    author: string;
    date: string;
    title: string;
    snippet: string;
  };
};

const getPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "pages/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(async (filename) => {
    const { meta } = await import(`../pages/posts/${filename}`);

    return {
      filename,
      data: meta,
    } as TPost;
  });

  return await Promise.all(posts);
};

export default getPosts;

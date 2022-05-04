import path from "path";
import fs from "graceful-fs";
import type { PostData } from "../types";

const getPosts = async () => {
  const postsDirectory = path.join(process.cwd(), "pages/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(async (filename) => {
    const { meta } = await import(`../pages/posts/${filename}`);

    return {
      filename,
      metadata: meta,
    } as PostData;
  });

  return await Promise.all(posts);
};

export default getPosts;

export type PostData = {
  filename: "string";
  metadata: {
    author: string;
    date: string;
    title: string;
    snippet: string;
  };
};

export type PostMetadata = PostData["metadata"] & { path: string };

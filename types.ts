export type PostData = {
  filename: "string";
  metadata: {
    author: string;
    date: string;
    title: string;
    snippet: string;
    image: {
      src: string;
      author: {
        name: string;
        url: string;
      };
      alt: string;
    };
  };
};

export type PostMetadata = PostData["metadata"] & { path: string };

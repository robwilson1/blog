import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import PostCard from "./post-card.component";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Post Card",
  component: PostCard,
} as ComponentMeta<typeof PostCard>;

export const Main: ComponentStory<typeof PostCard> = () => (
  <PostCard
    image={{
      src: "https://images.unsplash.com/photo-1484417894907-623942c8ee29",
      author: {
        name: "Emile Perron",
        url: "https://unsplash.com/@emilep",
      },
      alt: "MacBook Pro showing programming language",
    }}
    author="Rob Wilson"
    date="01-01-2000"
    snippet="Lorem ipsum dolar sit amet..."
    title="My blog post"
    path="/"
  />
);

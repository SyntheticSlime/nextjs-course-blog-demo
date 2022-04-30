import { Fragment } from "react";
import Head from "next/head";

import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
  return (
    <Fragment>
      <title>Steven's Blog.</title>
      <meta
        name="description"
        content="I post about programming and web development."
      />
      <Hero />
      <FeaturedPosts posts={props.posts} />
    </Fragment>
    // 1) Hero => Present ourselves
    // 2) Featured Posts
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    //revalidate: 300
  };
}

export default HomePage;

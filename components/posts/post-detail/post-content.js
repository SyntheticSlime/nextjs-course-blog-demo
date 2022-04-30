import ReactMarkdown from "react-markdown";
import Image from "next/image";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

import PostHeader from "./post-header";

import classes from "./post-content.module.css";

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const components = {
    img({ src, alt }) {
      return (
        <Image
          src={`/images/posts/${post.slug}/${src}`}
          alt={alt}
          width={600}
          height={300}
        />
      );
    },
    p({ children }) {
      if (children[0].type?.name === "img") {
        return <span>{children}</span>;
      }

      return <p>{children}</p>;
    },

    code({ className, children }) {
      const match = /language-(\w+)/.exec(className || ""); //I hate this. I have no idea what it does.
      return (
        <SyntaxHighlighter style={atomDark} language={match[1]}>
          {children}
        </SyntaxHighlighter>
      );
    },
  }; //this shit throws a couple warnings. ignore them. I'm pretty sure they don't matter.

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;

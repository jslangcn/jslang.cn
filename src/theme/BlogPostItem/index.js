import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Comments from '../../components/Comments'
import { useBlogPost } from '@docusaurus/theme-common/internal';

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage, metadata } = useBlogPost()
  const { frontMatter, permalink } = metadata
  const githubRepo = permalink.indexOf('question') == 1 ? 'jslangcn/_questions' : 'jslangcn/_posts';
  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <Comments {...{ repo: githubRepo, issueNumber: frontMatter.ID }} />}
    </>
  );
}

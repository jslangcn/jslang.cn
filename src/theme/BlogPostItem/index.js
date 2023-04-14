import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import Comments from '../../components/Comments'
import { useBlogPost } from '@docusaurus/theme-common/internal';
import { useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage, metadata } = useBlogPost()
  const { frontMatter, permalink } = metadata
  const location = useLocation();
  const { siteConfig: { customFields } } = useDocusaurusContext();
  const githubRepo = location.pathname.indexOf('question') == 1 ? customFields['createQuestion']?.url : customFields['createPost']?.url;
  return (
    <>
      <BlogPostItem {...props} />
      {(isBlogPostPage && githubRepo) && <Comments {...{ repo: githubRepo, issueNumber: frontMatter.ID }} />}
    </>
  );
}

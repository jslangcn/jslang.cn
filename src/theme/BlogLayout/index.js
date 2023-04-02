import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import BlogSidebar from '@theme/BlogSidebar';
import Link from "@docusaurus/Link";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useLocation } from '@docusaurus/router';
export default function BlogLayout(props) {
  const { sidebar, toc, children, ...layoutProps } = props;
  const hasSidebar = sidebar && sidebar.items.length > 0;
  const { siteConfig: { customFields } } = useDocusaurusContext();
  const location = useLocation();

  let createUrl = '';
  let createLabel = '';
  if (customFields['createQuestion'] || customFields['createPost']) {
    const createField = location.pathname.indexOf('question') == 1 ? customFields['createQuestion'] : customFields['createPost']
    createUrl = createField.url
    createLabel = createField.label
  }

  return (
    <Layout {...layoutProps}>
      <div className="container margin-vert--lg">
        <div className="row">
          <main
            className={clsx('col', 'col--8')}
            itemScope
            itemType="http://schema.org/Blog">
            {children}
          </main>
          <div className="col col--3 col--offset-1">
            {createUrl && createLabel && <Link
              className="col button button--primary margin-bottom--lg shadow--lw"
              itemProp="url"
              to={createUrl}
            >
              {createLabel}
            </Link>}
            <BlogSidebar sidebar={sidebar} />
            {toc && toc}
          </div>
        </div>
      </div>
    </Layout>
  );
}

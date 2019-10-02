import React from 'react';
import Page from './components/Page';
import Loading from './components/Loading';
const BlogPosts = React.lazy(() => import('./components/BlogPosts'));

function Blog() {
  return (
    <Page title="Blog">
      <React.Suspense fallback={<Loading />}>
        <BlogPosts url="posts" />
      </React.Suspense>
    </Page>
  );
}
export default Blog;

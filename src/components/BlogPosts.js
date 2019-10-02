import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Button from './Button';

const UL = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const BlogPageNavigation = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

function BlogPosts({ url }) {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${url}?_start=${page}&_limit=5`)
      .then(response => response.json())
      .then(json => setPosts(json));
  }, [url, page, setPosts]);

  return (
    <div>
      <UL>
        {posts.map(post => (
          <li key={post.id}>
            <Card userId={post.userId} title={post.title} body={post.body} />
          </li>
        ))}
      </UL>
      <BlogPageNavigation>
        <Button onClick={() => setPage(page + 5)}>Next Page</Button>
        {page > 5 && (
          <Button onClick={() => setPage(page - 5)}>Previous Page</Button>
        )}
      </BlogPageNavigation>
    </div>
  );
}
export default BlogPosts;

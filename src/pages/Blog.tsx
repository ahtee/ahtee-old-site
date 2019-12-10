import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'

function Blog() {
  return (
    <div>
      <Helmet>
        <title>otte.io | Blog</title>
        <meta name="description" content="otte.io blog posts" />
      </Helmet>
      <Header title="Blog (coming soon!)" />
    </div>
  )
}
export default Blog

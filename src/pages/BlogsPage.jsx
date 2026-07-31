import BlogListing from '../components/blog/BlogListing'
import { blogsPageData } from '../data/blogs.data'

function BlogsPage() {
  return <BlogListing data={blogsPageData} />
}

export default BlogsPage

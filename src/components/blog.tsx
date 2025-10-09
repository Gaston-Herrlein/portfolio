import blogPost from "../const/blogPosts.json";

const Blogs = () => {
  return (
    <section className="section" id="blog">
      <h2 className="section-title">Latest Posts</h2>
      <div className="blog-list">
        {blogPost.map((post, index) => (
          <div key={index} className="blog-item">
            <div className="blog-content">
              <h3 className="blog-title">{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
            </div>
            <div className="blog-date">{post.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;

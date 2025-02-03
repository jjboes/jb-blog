import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const sections = {
    technology: {
      title: "Technology & AI",
      posts: [
        "The Future of LLMs: Beyond Text Generation",
        "Silicon Valley's Third Wave",
        "Why Programming Languages Matter",
        "The Hidden Costs of Technical Debt",
        "AI Safety: A Pragmatic Approach"
      ]
    },
    society: {
      title: "Society & Culture",
      posts: [
        "Baseball's Analytics Revolution",
        "The Evolution of Remote Work",
        "Digital Gardens vs Traditional Blogs",
        "Modern Craft Movement",
        "Urban Planning in the Age of AI"
      ]
    },
    craft: {
      title: "Craft & Skills",
      posts: [
        "Japanese Joinery Techniques",
        "The Art of Technical Writing",
        "Learning Languages Efficiently",
        "Baseball Pitch Design",
        "Travel as a Learning Tool"
      ]
    }
  };

  return (
    <div className="container">
      <p className="intro">
        This is JB's blog. I write about technology, society, and craft. 
        My focus areas include artificial intelligence, baseball analytics, 
        woodworking, and the intersection of traditional crafts with modern technology.
      </p>
      
      <div className="blog-sections">
        {Object.entries(sections).map(([key, section]) => (
          <div key={key} className="section">
            <h2>{section.title}</h2>
            <ul className="post-list">
              {section.posts.map((post, index) => (
                <li key={index}>
                  <Link to={`/post/${index}`}>{post}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const sections = {
    newest: {
      title: "Newest",
      posts: [
        "The Future of Claude and GPT-4",
        "Baseball Analytics: Beyond Moneyball",
        "Learning Japanese: A Programmer's Approach",
        "The Art of Technical Documentation",
        "Why Software Projects Fail"
      ]
    },
    ai: {
      title: "AI & Technology",
      posts: [
        "LLM Scaling Laws Explained",
        "The Promise of Constitutional AI",
        "Neural Networks: A Deep Dive",
        "AI Safety: Practical Steps",
        "The Future of Code Generation",
        "Machine Learning in Baseball Analytics",
        "Understanding Attention Mechanisms"
      ]
    },
    tech: {
      title: "Programming & Systems",
      posts: [
        "Software Architecture Patterns",
        "The Unix Philosophy Today",
        "Modern JavaScript Practices",
        "Database Design Principles",
        "API Design Best Practices",
        "Technical Debt: A New Perspective"
      ]
    },
    baseball: {
      title: "Baseball & Analytics",
      posts: [
        "Pitch Design: Art Meets Science",
        "The Evolution of Baseball Stats",
        "Building Better Baseball Models",
        "Player Development Analytics",
        "The Future of Baseball Data",
        "Biomechanics in Pitching"
      ]
    },
    society: {
      title: "Society & Culture",
      posts: [
        "Remote Work Revolution",
        "Digital Gardens vs Traditional Blogs",
        "The Future of Technical Writing",
        "Information Architecture Today",
        "Learning in Public"
      ]
    },
    meta: {
      title: "Meta & Personal",
      posts: [
        "Writing Systems for Technical Blogs",
        "Note-Taking Methodologies",
        "Personal Knowledge Management",
        "Building a Digital Garden",
        "Long-form Content in the Age of Social Media"
      ]
    }
  };

  return (
    <div className="container">
      <div className="intro">
        <h1>JB's Digital Garden</h1>
        <p>
          I write about artificial intelligence, programming, baseball analytics, and the 
          intersection of technology and society. My focus is on long-form technical analysis 
          and research notes, particularly in AI safety, software architecture, and sports analytics.
        </p>
      </div>
      
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
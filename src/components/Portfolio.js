import React from 'react';

class Portfolio extends React.Component {
  render() {
    const {post, handleDelete, handleSingleView} = this.props;

    return (
      <div className="Portfolio">
        <div className="image-wrapper">
          <img width="450" height="250" src={post.image} alt="portfolio" />
        </div>
        <div className="content-area">
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
        <button onClick={()=>handleDelete(post.id)}>delete</button>
        <button onClick={()=>handleSingleView(post.id)}>View</button>
      </div>
    )
  }
}

export default Portfolio;

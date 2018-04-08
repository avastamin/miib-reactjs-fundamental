import React from 'react';
import { Link } from 'react-router-dom'

class Portfolio extends React.Component {

  render() {
    const {posts, handleDelete, handleSingleView} = this.props;

    return (
      <div className="Listcontainer">
      {this.props.posts && this.props.posts.map( post => (
          <div className="Portfolio" key={post.id}>
            <div className="image-wrapper">
              <img width="450" height="250" src={post.image} alt="portfolio" />
            </div>
            <div className="content-area">
              <h2>{post.title}</h2>
              <p>{post.text}</p>
              <button type="button" onClick={() => handleDelete(post.id)}>Delete</button>
              <button type="button">
              <Link to={`${post.id}`}>View</Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Portfolio;

import React from 'react';

class Portfolio extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="Portfolio">
        <div className="image-wrapper">
          <img width="450" height="250" src={this.props.post.image} alt="portfolio" />
        </div>
        <div className="content-area">
          <h2>{this.props.post.title}</h2>
          <p>{this.props.post.text}</p>
          <button onClick={()=>this.props.handleDelete()}>Delete</button>
        </div>

      </div>
    )
  }
}

export default Portfolio;

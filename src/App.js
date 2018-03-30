import React, { Component } from 'react';
import Portfolio from './components/Portfolio'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      posts: [
        {
        "id": 1501798834150,
        "title": "MatLang one",
        "image": "http://via.placeholder.com/450x250",
        "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"
      },
      {
        "id": 1501798834151,
        "title": "MatLang two",
        "image": "http://via.placeholder.com/450x250",
        "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"
      },
      {
        "id": 1501798834152,
        "title": "MatLang three",
        "image": "http://via.placeholder.com/450x250",
        "text": "quam pharetra magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus"
      },
      ]
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleSingleView = this.handleSingleView.bind(this)
  }

  handleDelete(id) {
   this.setState({
     posts: this.state.posts.filter(post => post.id !=id)
   })
  }
  handleSingleView(id) {
    this.setState({
      posts: this.state.posts.filter(post => post.id ===id)
    })
  }
  render() {
    return (
      <div className="App">
      <div className="HeaderWrap">
        <header className="App-header">
          <h1 className="App-title">Reactjs অ্যাপ্লিকেশান এ স্বাগতম</h1>
        </header>
        </div>
        <div className="Listcontainer">
        {this.state.posts.map(post => (
            <Portfolio key={post.id} post ={post}
              handleDelete={this.handleDelete}
              handleSingleView={this.handleSingleView}
            />
        ))}
        </div>
      </div>
    );
  }
}
export default App;

import React, { Component } from 'react';
import Portfolio from './components/Portfolio'
import './App.css';
const data = [
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

class App extends Component {

  handleDelete() {
    alert('delete')
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
        {data.map(post => (
            <Portfolio key={post.id} post ={post}
              handleDelete={this.handleDelete}
            />
        ))}
        </div>
      </div>
    );
  }
}
export default App;

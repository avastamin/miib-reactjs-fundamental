import React, { Component } from 'react';
import Portfolio from './components/Portfolio'
import SingleView from './components/SingleView'
import { Switch, Route } from 'react-router'
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      posts: []
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

  componentDidMount() {
    fetch('http://localhost:3001/api/posts').then(res=>res.json())
    .then(data=>{
     this.setState({
      posts: data
     })
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
        <Switch>
          <Route exact path="/" render={()=>(
            <Portfolio {...this.state}
              handleDelete={this.handleDelete}
              handleView={this.handleView}
            />
          )}/>
          <Route path="/:postID" render={(props)=> (
            <SingleView {...this.state} {...props}/>
          )}/>

        </Switch>
      </div>
    );
  }
}
const About = () => {
  return (
    <div>Coming from about</div>
  )
}
export default App;

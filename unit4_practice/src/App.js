import React, { Component } from 'react';
import { Route } from "react-router-dom"
import axios from "axios";
import { NavBar } from "./nav";
import DisplayPosts from "./posts.js";
import Albums from "./albums.js";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }



  componentDidMount = () => {
    // this.postsApiCall();
  }

  render() {
    return (
      <>
      <div>
        <NavBar />
      </div>
      <div>
        <Route exact path="/posts" component={DisplayPosts} />
        <Route path="/albums" component={Albums} />
      </div>
      </>
    );
  }
}

export default App;

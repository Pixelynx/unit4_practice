import React, { Component } from 'react';
import { Route } from "react-router-dom"
import axios from "axios";
import { NavBar } from "./nav";
import DisplayPosts from "./posts.js";
import Albums from "./albums.js";
import Users from "./users.js";
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
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
        <Route path="/users" component={Users} />
      </div>
      </>
    );
  }
}

export default App;

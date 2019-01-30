import React, { Component } from "react";
import axios from "axios";

class DisplayPosts extends Component {
  constructor() {
    super()
    this.state = {
      allPosts: []
    }
  }

  componentDidMount = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      let data = res.data;
      this.setState({
        allPosts: data
      })
      console.log(data)
    }).catch(err => console.log(err))
  }

  dispAllPosts = () => {
    let mapped = this.state.allPosts.map(post => {
      return (
        <div>
          <h4>User ID: {post.userId}</h4>
          <p>{post.body}</p>
          </div>
        )
    })
    return mapped
  }

  render() {
    const { allPosts } = this.state;
    const dispAllPosts = this.dispAllPosts();

    return(
      <div>{dispAllPosts}</div>
    )
  }
}

export default DisplayPosts;

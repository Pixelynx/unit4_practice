import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import { DisplayAlbums } from "./displayAlbums.js";
import { SingleAlbum } from "./singleAlbum.js";

const photoURL = "https://jsonplaceholder.typicode.com/photos";
const albumURL = "https://jsonplaceholder.typicode.com/albums";

class Albums extends Component {
  constructor() {
    super();
    this.state = {
      allPhotos: [],
      allAlbums: []
    }
  }

  componentDidMount() {
    this.getAllAlbums();
    this.getAllPhotos();
  }

  getAllAlbums = () => {
    axios.get(albumURL)
    .then(res => {
      let data = res.data;
      this.setState({ allAlbums: data })
    }).catch(err => console.log(err))
  }

  getAllPhotos = () => {
    axios.get(photoURL)
    .then(res => {
      let data = res.data;
      console.log(res.data)
      this.setState({ allPhotos: data })
    }).catch(err => console.log(err))
  }

  render() {
    return(
      <>
        <Route exact path="/albums"
         render={() => <DisplayAlbums albums={this.state.allAlbums} />
       }
         />

        <Route path="/albums/:id"
          render={props =>
            <SingleAlbum {...props}
              photos={this.state.allPhotos}
              albums={this.state.allAlbums} />
          }
          />

      </>
    )
  }
}

export default Albums;

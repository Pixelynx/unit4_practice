import React from "react";
import "./App.css";

export const SingleAlbum = (props) => {
    let { id } = props.match.params
    if(props.photos.length && props.albums.length) {

      let findAlbum = props.albums.find(album => album.id === Number(id))
      let findPhotos = props.photos.filter(photo => photo.albumId === Number(id))
      console.log(props.photos.albumId)
    return (
      <>
      <div className="thumbnail_url">
        <h1>{findAlbum.title}</h1>
          {findPhotos.map(photo => {
          return  <img key={photo.id} src={photo.thumbnailUrl} alt="" />
          })}
        </div>
      </>
  )
}

  return <div>Loading...</div>
}

import React from "react";
import { Link } from "react-router-dom";

export const DisplayAlbums = ({ albums }) => {
  return (
    <>
      <ul>
        {
          albums.map(album => {
          let albumLink = `/albums/${album.id}`

          return (
            <div key={album.id}>
              <li> <Link to={albumLink}>{album.title}</Link> </li>
            </div>
          )
          })
        }
      </ul>
  </>
)
}

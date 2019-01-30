import React from "react";
import { Route, Link } from "react-router-dom";
import DisplayPosts from "./posts";
// import Albums from "./albums.js";

export const NavBar = () => {
  return(
    <div>
      <nav>
        <Link to="/posts">Posts</Link>
        {" "}
        <Link to="/albums">Albums</Link>
        {" "}
        <Link to="/todos">ToDos</Link>
        {" "}
        <Link to="/users">Users</Link>
      </nav>

    </div>
  )
}

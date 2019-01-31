import React, { Component } from "react";
import

class Users extends Component {
  constructor() {
    super()
    this.state = {
      searchInput: ""
    }
  }

  allUsers = "https://jsonplaceholder.typicode.com/users";

  componentDidMount = () => {
    a
  }

  handleChange = (event) => {
    this.setState({ searchInput: event.target.value})
  }

  render() {
    return(
      <>
        <div className="search_users">
          <input
                type="text"
                placeholder="Search users"
                onChange={this.handleChange}
                value=""
                />
          <input type="button" value="Search" />
        </div>
      </>
    )
  }
}

export default Users;

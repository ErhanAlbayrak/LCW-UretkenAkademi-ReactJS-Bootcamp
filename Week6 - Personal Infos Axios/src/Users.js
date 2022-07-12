import React, { Component } from "react";
import axios from "axios";
import {Table} from "reactstrap";

export default class Users extends Component {
  state = {
    userList: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((list) => {
      const userList = list.data;
      this.setState({ userList });
    });
  }
  render() {
    return (
      <div>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Real Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.userList.map((users) => (
              <tr key={users.id}>
                <th scope="row">{users.id}</th>
                <td>{users.username}</td>
                <td>{users.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>      
      </div>
    );
  }
}

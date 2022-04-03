import React, { Component } from "react";
import "./Todo.css";

export default class Todo extends Component {
  render() {
    return (
      <ul>
        <li className="container1">
          {this.props.details.nom}
          <button onClick={() => this.props.onDelete(this.props.details.id)}>
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </li>
      </ul>
    );
  }
}
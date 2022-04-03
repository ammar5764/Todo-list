import React, { Component } from "react";
import "./Todos.css";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

export default class Todos extends Component {
  state = {
    Clients: [],
    nouveauClient: "",
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = uuidv4();
    const name = this.state.nouveauClient;
    const newClient = { id: id, nom: name };
    const clients = this.state.Clients.slice();

    clients.push(newClient);
    this.setState({ Clients: clients, nouveauClient: "" });
  };

  handleChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ nouveauClient: value });
  };
  handleDelete = (id) => {
    const copy = this.state.Clients.slice();
    const index = copy.findIndex(function (x) {
      return x.id === id;
    });
    copy.splice(index, 1);
    this.setState({ Clients: copy });
  };

  render() {
    return (
      <div className="container">
        <div className="title">Todo List</div>
        <form onSubmit={this.handleSubmit}>
          <div className="addList">
            <input class="form-control"
              value={this.state.nouveauClient}
              type="text"
              onChange={this.handleChange}
              placeholder="enter your name"
            />
            <button>ajouter</button>
            <div className="main">
              {this.state.Clients.map((x) => (
                    <Todo details={x} onDelete={this.handleDelete}></Todo>
              ))}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

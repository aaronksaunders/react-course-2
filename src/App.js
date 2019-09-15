import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AddUser from "./components/AddUsers";
import ListUsers from "./components/ListUsers";

class App extends React.Component {
  state = { people: [] };
  handleAddUser = _userInfo => {
    console.log(_userInfo);
    let createdDate = new Date().getTime();
    let { people } = this.state;

    people.push({ name: _userInfo, createdDate, id: createdDate });
    this.setState({ people });
  };

  handleDeleteUser = _userIndex => {
    let { people } = this.state;
    let newPeople = [
      ...people.slice(0, _userIndex),
      ...people.slice(_userIndex + 1)
    ];
    this.setState({ people: newPeople });
  };

  render() {
    return (
      <div className="App">
        <AddUser handleSubmit={this.handleAddUser}></AddUser>
        <ListUsers
          users={this.state.people}
          onDelete={this.handleDeleteUser}
        ></ListUsers>
      </div>
    );
  }
}

export default App;

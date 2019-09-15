import React, { Component } from "react";
import PropTypes from "prop-types"; // https://reactjs.org/docs/typechecking-with-proptypes.html

class AddUser extends Component {
  state = { name: { first: "", last: "" }, invalid: true };

  // this function does not by default have access to the current
  // scope of the component "this" so we need to bind it to the
  // component
  handleChangeFirst = _event => {
    _event.persist();

    // the destructuring - take everthing that was in name and assign
    // it to name, then set the value of the first name based on the
    // _event.target.value
    this.setState((state, props) => {
      let { last } = state.name;
      return {
        name: {
          ...state.name,
          first: _event.target.value
        },
        invalid: !(_event.target.value.length && last.length)
      };
    });
  };

  // using fat arrow, we dont need binding
  // javasctipt destructuring
  handleChangeLast = _event => {
    _event.persist();

    // the destructuring - take everthing that was in name and assign
    // it to name, then set the value of the last name based on the
    // _event.target.value
    this.setState((state, props) => {
      let { first } = state.name;
      return {
        name: {
          ...state.name,
          last: _event.target.value
        },
        invalid: !(_event.target.value.length && first.length)
      };
    });
  };

  handleChangeText = (_event) => {
    _event.persist();

    // the destructuring - take everthing that was in name and assign
    // it to name, then set the value of the last name based on the
    // _event.target.value
    this.setState((state, props) => {
      let { first, last } = state.name;
      return {
        name: {
          ...state.name,
          [_event.target.name] : _event.target.value
        },
        invalid: !(_event.target.value.length && first.length && last.length)
      };
    });
  }

  // using fat arrow, we dont need binding
  // call the function that was passed in as a property
  // from the parent component, "App"
  handleBtnClick = _event => {
    // igmor default behavior of seubmit
    _event.preventDefault();

    let userName = this.state.name;

    // clear the name
    this.refs.first.value = "";
    this.refs.last.value = "";

    this.props.handleSubmit(userName);
  };

  render() {
    return (
      <>
        <h1>
          Hello, {this.state.name.first} {this.state.name.last}
        </h1>
        <input
          type="text"
          name="first"
          ref="first"
          value={this.state.first}
          onChange={this.handleChangeText}
        />
        <br />
        <input
          type="text"
          name="last"
          ref="last"
          value={this.state.last}
          onChange={this.handleChangeText}
        />
        <button
          onClick={this.handleBtnClick}
          disabled={this.state.invalid === true}
        >
          CLICK ME
        </button>
      </>
    );
  }
}

AddUser.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default AddUser;

import React, { Component } from "react";
import PropTypes from "prop-types"; // https://reactjs.org/docs/typechecking-with-proptypes.html

class AddUser extends Component {
  state = {
    name: {
      first: "",
      last: ""
    },
    invalid: true
  };

  /**
   * when changing the first name input field
   */
  handleChangeFirst = _event => {
    _event.persist();

    // the destructuring - take everthing that was in name and assign
    // it to name, then set the value of the first name based on the
    // _event.target.value
    this.setState((state, props) => {
      return {
        name: {
          ...state.name,
          first: _event.target.value
        },
        invalid: !(_event.target.value.length && state.name.last.length)
      };
    });
  };

  /**
   * when changing the last name input field
   */
  handleChangeLast = _event => {
    _event.persist();

    // the destructuring - take everthing that was in name and assign
    // it to name, then set the value of the last name based on the
    // _event.target.value
    this.setState((state, props) => {
      return {
        name: {
          ...state.name,
          last: _event.target.value
        },
        invalid: !(_event.target.value.length && state.name.first.length)
      };
    });
  };

  /**
   * a generic way to handle changing the value of the input text field
   * by using the name of the input element to properly set the 
   * state
   */
  handleChangeText = _event => {
    _event.persist();

    // the destructuring - take everthing that was in name and assign
    // it to name, then set the value of the last name based on the
    // _event.target.value
    this.setState((state, props) => {
      let { first, last } = state.name;
      return {
        name: {
          ...state.name,
          [_event.target.name]: _event.target.value
        },
        invalid: !(_event.target.value.length && first.length && last.length)
      };
    });
  };

/**
 * 1) get the data that the user has entered from the state
 * 2) get a reference to the input elements so we can cleat them 
 * 3) call the function passed in as a property to respond to
 * the user's action
 */
  handleBtnClick = _event => {
    // igmor default behavior of seubmit
    _event.preventDefault();

    let userName = this.state.name;

    // clear the name
    this.refs.first.value = "";
    this.refs.last.value = "";

    // pass the name of the user back to the
    // parent component through the event
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

// define the properties
AddUser.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default AddUser;

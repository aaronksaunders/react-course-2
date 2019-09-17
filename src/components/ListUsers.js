import React from "react";
import PropTypes from "prop-types"; // https://reactjs.org/docs/typechecking-with-proptypes.html

class ListUsers extends React.Component {
  state = {
    name: {}
  };
  render() {
    let users = this.props.users;
    return users ? (
      <div>
        {this.props.users.map((_user, _index) => {
          return (
            <div key={_user.id}>
              <h3>
                {_user.name.first}&nbsp;{_user.name.last}
              </h3>
              <button onClick={() => this.props.onDelete(_index)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    ) : null;
  }
}

ListUsers.propTypes = {
  users: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ListUsers;

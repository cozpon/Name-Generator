import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createName } from '../../actions/name';

class NameInput extends Component {
  constructor(props){
    super(props);

    this.state = { // set initial state storage object.
      firstName: '',
      lastName: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFirstNameInput = this.handleFirstNameInput.bind(this);
    this.handleLastNameInput = this.handleLastNameInput.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    if (this.state.firstName && this.state.lastName) { // Don't allow empty submissions
      let userData = {
        firstName: this.state.firstName,// user inserts/changes some data, it sets the state here
        lastName: this.state.lastName
      };
    this.props.createName(userData);
    }

    this.setState({ // reset your state so it's ready for next submission
      firstName: '',
      lastName: ''
    });
  }

  handleFirstNameInput(evt){
    evt.preventDefault();
    this.setState({
      firstName: evt.target.value
    }); // setting the state of the first name to be the value input in the form
  }

  handleLastNameInput(evt){
    evt.preventDefault();
    this.setState({
      lastName: evt.target.value
    }); // setting the state of the last name to be the value input in the form
  }

  render() {
    return (
      <div className="nameInput">
        <form className="SubmitButton" onSubmit={this.handleSubmit}>
          <div className="firstName-input">
            <input
              value={this.state.firstName}
              className="Name-Input"
              type="text"
              placeholder="Enter Your First Name"
              onChange={this.handleFirstNameInput}
            />
          </div>
          <div className="lastName-input">
            <input
              value={this.state.lastName}
              className="Name-Input"
              type="text"
              placeholder="Enter Your Last Name (or just your last initial)"
              onChange={this.handleLastNameInput}
            />
          </div>
          <input
            className="submit-button"
            type="submit"
            value="Create My Band Name"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  firstName : state.firstName, // makes it this.props.firstName
  lastName : state.lastName
}); // Dan Abramov says if the arrow function only contains a single return statement (an object)
    // you can remove the return in place for parenthesis to make it an object expression

const mapDispatchToProps = dispatch => {
  return {
    createName: (name) => {
      dispatch(createName(name))
    }
  }
}

const ConnectedNameInput = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameInput)

export default ConnectedNameInput;
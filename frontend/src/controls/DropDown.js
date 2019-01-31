import React, { Component } from "react";
import { connect } from "react-redux";
import { ControlLabel, FormGroup, FormControl } from "react-bootstrap";
import { getValidationDropDown } from "../validations";

const NO_VALUE = "";

class DropDown extends Component {
  //const DropDown = ({ label, list, state, action, }) => {
  constructor(props, context) {
    super(props, context);
    this.state = {
      valid: Boolean(this.props.state),
      [this.props.model]: this.props.state
    };
    this.selectEvent = this.selectEvent.bind(this);
  }
  selectEvent = e => {
    //set local state for validation purposes
    this.setState({ valid: e.target.value !== NO_VALUE });
    this.props.action(e.target.value);
  };

  render() {
    return (
      <FormGroup
        controlId="genres"
        validationState={getValidationDropDown(this.state.valid)}
      >
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          componentClass="select"
          value={this.state[this.props.model]}
          onChange={this.selectEvent}
        >
          <option key={0} value={NO_VALUE}>
            -Select-
          </option>
          {this.props.list.map(element => (
            <option key={element._id} value={element._id}>
              {element.name}
            </option>
          ))}
        </FormControl>
      </FormGroup>
    );
  }
}

export default connect(
  null,
  {}
)(DropDown);

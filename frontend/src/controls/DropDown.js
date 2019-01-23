import React from "react";
import { ControlLabel, FormGroup, FormControl } from "react-bootstrap";

const DropDown = ({ label, list, state, action }) => {
  return (
    <FormGroup
      controlId="genres"
      validationState={this.getValidationState(state)}
    >
      <ControlLabel>{label}</ControlLabel>
      <FormControl componentClass="select" onChange={action}>
        <option key={0} value={-1}>
          -Select-
        </option>
        {list.map(element => (
          <option key={element._id} value={state}>
            {element.name}
          </option>
        ))}
      </FormControl>
    </FormGroup>
  );
};

export default DropDown;

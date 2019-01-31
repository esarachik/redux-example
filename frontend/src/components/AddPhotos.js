import React, { Component } from "react";
import { ControlLabel, FormControl, Label } from "react-bootstrap";
import { connect } from "react-redux";
import { uploadImages } from "../actions/vinylActions";

class AddPhotos extends Component {
  constructor(props, context) {
    super(props, context);
    this.handlePhotos = this.handlePhotos.bind(this);
  }

  handlePhotos(event) {
    event.preventDefault();
    let files = event.target.files;

    if (files && files.length > 0) {
      const elements = [...files].map(element =>
        this.props.uploadImages(element)
      );

      Promise.all(elements).then(values => {
         values.map(element => 
          {}
          //Ingresar a mongo          
        );
      });
    } else {
      console.log("no files selected");
    }
  }

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <ControlLabel>Photos</ControlLabel>
        <FormControl
          name="images"
          type="file"
          className=""
          multiple
          onChange={this.handlePhotos}
        />      
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { uploadImages }
)(AddPhotos);

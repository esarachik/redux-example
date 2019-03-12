import React, { Component } from "react";
import {
  ControlLabel,
  FormControl,
  Table,
  FormGroup
} from "react-bootstrap";
import { connect } from "react-redux";
import { setLoading } from "../actions/vinylActions";
import { uploadImages, setFinished, setImages } from "../actions/imageActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import Images from "./Images";

class AddPhotos extends Component {
  constructor(props, context) {
    super(props, context);
    this.handlePhotos = this.handlePhotos.bind(this);
    this.showPhotos = this.showPhotos.bind(this);
    this.state = {};
  }

  // showPhotos(event) {
  //   let files = event.target.files;
  //   if (files && files.length > 0) {
  //     [...files].map(element => {
  //       var reader = new FileReader();
  //       reader.onload = e => {
  //         debugger;
  //         this.props.images.push(e.target.result);
  //       };

  //       reader.onloadend = () => {
  //         return reader.result;
  //       };

  //       reader.readAsDataURL(element);
  //     });
  //   }
  // }

  readUploadedFileAsText(inputFile) {
    const temporaryFileReader = new FileReader();

    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };

      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsDataURL(inputFile);
    });
  }

  showPhotos(event, addImage) {
    let files = event.target.files;
    if (files && files.length > 0) {
      [...files].map(async (file, index) => {
        const fileContents = await this.readUploadedFileAsText(file);
        var elements = {
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          name: file.name,
          size: file.size,
          type: file.type,
          fileContents,
          index
        };
        this.setState(elements);
        this.props.setImages(elements);
      });
    }
  }

  handlePhotos(event) {
    this.props.setFinished(false);
    this.props.setLoading(true);
    let files = event.target.files;

    if (files && files.length > 0) {
      const elements = [...files].map(element =>
        this.props.uploadImages(element)
      );

      Promise.all(elements).then(values => {
        values.map(element => {
          this.props.setFinished(true);
          return this.props.setLoading(false);
        });
      });
    } else {
      console.log("no files selected");
    }
  }
  removeImage() {}

  onError() {}
  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <FormGroup>
          <ControlLabel>Photos</ControlLabel>
          <div>
            <label htmlFor="sendFiles">
              <FontAwesomeIcon icon={faImage} size="4x" />
            </label>
          </div>
          <FormControl
            id="sendFiles"
            name="images"
            type="file"
            className=""
            multiple
            onChange={this.showPhotos}
            accept="image/*"
          />
        </FormGroup>
        
        <FormGroup>
          <Images
            images={this.props.images}
            removeImage={this.removeImage}
            onError={this.onError}
          />
        </FormGroup>

        <FormGroup>
          <Table striped bordered condensed hover>
            <thead>
              <tr>
                <th>File List</th>
              </tr>
            </thead>
            <tbody>
              {this.props.images.length > 0 ? (
                this.props.images.map(element => {
                  return (
                    <tr key={element._id}>
                      <td>{element.name}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>No tracks!</td>
                </tr>
              )}
            </tbody>
          </Table>
        </FormGroup>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => ({
  images: state.image.images,
  finished: state.image.finished
});
export default connect(
  mapStateToProps,
  { uploadImages, setLoading, setFinished, setImages }
)(AddPhotos);

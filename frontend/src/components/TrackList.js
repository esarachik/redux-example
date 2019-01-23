import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl,
  Button,
  Table
} from "react-bootstrap";
import { addTrack, removeTrack } from "../actions/trackActions";

class TrackList extends Component {
  getValidationState() {
    // const length = this.state.value.length;
    // if (length > 10) return "success";
    // else if (length > 5) return "warning";
    // else if (length > 0) return "error";
    return null;
  }
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTrack = this.handleAddTrack.bind(this);

    this.state = {
      tracks: []
    };
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleAddTrack() {
    this.state.tracks.push({
      number: this.state.tracks.length + 1,
      name: this.state.trackName,
      duration: this.state.trackDuration
    });
    this.setState({ tracks: this.state.tracks });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={4}>
            <FormGroup
              controlId="trackName"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Track</ControlLabel>
              <FormControl
                type="text"
                value={this.state.trackName}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </Col>
          <Col xs={12} md={4}>
            <FormGroup
              controlId="trackDuration"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Duration</ControlLabel>
              <FormControl
                type="text"
                value={this.state.trackDuration}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </Col>
          <Col
            xs={12}
            md={4}
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: 25
            }}
          >
            <Button className="align-self-end" onClick={this.handleAddTrack}>
              Add Track
            </Button>
          </Col>
        </Row>

        <Table striped bordered condensed hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Track</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tracks.map(element => {
              return (
                <tr>
                  <td>{element.number}</td>
                  <td>{element.name}</td>
                  <td>{element.duration}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </React.Fragment>
    );
  }
}

export default connect(
  null,
  { addTrack, removeTrack }
)(TrackList);

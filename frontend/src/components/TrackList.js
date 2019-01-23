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
import { getValidationState } from "../validations";

class TrackList extends Component {
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
              validationState={getValidationState(this.state.trackName)}
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
              validationState={getValidationState(this.state.trackDuration)}
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
            {this.state.tracks && this.state.tracks.length > 0 ? (
              this.state.tracks.map(element => {
                return (
                  <tr>
                    <td>{element.number}</td>
                    <td>{element.name}</td>
                    <td>{element.duration}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={3}>No tracks!</td>
              </tr>
            )}
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

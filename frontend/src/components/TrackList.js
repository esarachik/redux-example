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
import {
  addTrack,
  removeTrack
} from "../actions/trackActions";

class TrackList extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleAddTrack = this.handleAddTrack.bind(this);

    this.state = {
      trackName:'',
      trackDuration:''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleAddTrack() {
    const { trackName, trackDuration } = this.state;
    let tracks = this.props.tracks;

    const newTrack = {
      number: tracks.length + 1,
      name: trackName,
      duration: trackDuration
    };    
    this.props.addTrack(newTrack);
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={4}>
            <FormGroup
              controlId="trackName"
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
            { this.props.tracks.length > 0 ? (
              this.props.tracks.map(element => {
                return (
                  <tr key={element._id}>
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
const mapStateToProps = state => ({
  tracks: state.track.tracks 
});
export default connect(
  mapStateToProps,
  { addTrack, removeTrack }
)(TrackList);

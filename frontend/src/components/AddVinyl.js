import React, { Component } from "react";
import VinylData from "./VinylData";
import TrackList from "./TrackList";
import { connect } from "react-redux";

import { Grid, Col, Row, Button } from "react-bootstrap";

class AddVinyl extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleAddTrack = this.handleAddTrack.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  componentDidMount() {

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
      <div>
        {/* <Image src="assets/gene.jpg" className="header-image" /> */}
        <form>
          <Grid>
            <Col xs={12} sm={8} smOffset={2}>
              <Row>
                <Col xs={10} md={10}>
                  <h2>Ingreso de discos</h2>
                </Col>
                <Col xs={2} md={2}>
                  <Button
                    className="align-self-end"
                    onClick={this.handleAddTrack}
                  >
                    Add Disco
                  </Button>
                </Col>
              </Row>
              <hr />

              <VinylData />

              <TrackList />
            </Col>
          </Grid>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  {  }
)(AddVinyl);

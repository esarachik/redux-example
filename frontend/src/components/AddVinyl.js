import React, { Component } from "react";
import VinylData from "./VinylData";
import TrackList from "./TrackList";
import AddPhotos from "./AddPhotos";
import { connect } from "react-redux";
import {} from "../validations";
import _ from "lodash";
import { addDisc } from "../actions/vinylActions";
import NotificationSystem from 'react-notification-system';

import { Grid, Col, Row, Button } from "react-bootstrap";

class AddVinyl extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleAddDisc = this.handleAddDisc.bind(this);
    this.state = {}
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  _addNotification= (event) => {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Notification message',
      level: 'success'
    });
  }
  componentDidMount() {
    this._notificationSystem = this.refs.notificationSystem;
  }
 
  discObjectBuilder = () => {
    return {
      name: this.props.name,
      band: this.props.band,
      year: this.props.year,
      genre: this.props.genre,
      label: this.props.label,
      country: this.props.country,
      tracks: this.props.tracks
    };
  };

  handleAddDisc() {
    this.props.addDisc(this.discObjectBuilder());
  }

  disabledDiscButton = () => {
    const propsToCheck = Object.values(this.discObjectBuilder());
    return propsToCheck.reduce((prev, curr) => {
      return _.isEmpty(curr) || prev;
    }, false);
  };

  render() {
    return (
      
      <div>
        {/* <Image src="assets/gene.jpg" className="header-image" /> */}
        <NotificationSystem ref="notificationSystem" />
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
                    onClick={this.handleAddDisc}
                    disabled={this.disabledDiscButton()}
                  >
                    Add Disco
                  </Button>
                </Col>
              </Row>
              <hr />

              <VinylData />

              <TrackList />

              <AddPhotos />
              
            </Col>
          </Grid>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  name: state.vinyl.name,
  year: state.vinyl.year,
  countries: state.vinyl.countries,
  bands: state.vinyl.bands,
  labels: state.vinyl.labels,
  genres: state.vinyl.genres,
  country: state.vinyl.country,
  band: state.vinyl.band,
  genre: state.vinyl.genre,
  label: state.vinyl.label,
  tracks: state.track.tracks,

});

export default connect(
  mapStateToProps,
  { addDisc }
)(AddVinyl);

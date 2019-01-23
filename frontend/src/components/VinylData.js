import React, { Component } from "react";
import {
  Row,
  Col,
  FormControl,
  FormGroup,
  ControlLabel
} from "react-bootstrap";

import { connect } from "react-redux";
import {
  updateBand,
  updateCountry,
  updateGenre,
  updateLabel,
  fetchBands,
  fetchCountries,
  fetchGenres,
  fetchLabels
} from "../actions/vinylActions";
import DropDown from "../controls/DropDown";

class VinylData extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleUpdateBand = this.handleUpdateBand.bind(this);
    this.handleUpdateCountry = this.handleUpdateCountry.bind(this);
    this.handleUpdateGenre = this.handleUpdateGenre.bind(this);
    this.handleUpdateLabel = this.handleUpdateLabel.bind(this);

    this.state = {
      countries: [],
      bands: [],
      genres: [],
      labels: [],
      name: "",
      year: ""
    };
  }
  getValidationState(e) {
    const length = e.length;
    if (length > 0) return "success";
    else return null;
  }

  componentWillMount() {
    this.props.fetchBands();
    this.props.fetchCountries();
    this.props.fetchGenres();
    this.props.fetchLabels();
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleUpdateBand(e) {
    this.props.updateBand({
      name: e.target.value
    });
  }

  handleUpdateCountry(e) {
    this.props.updateCountry({
      name: e.target.value
    });
  }

  handleUpdateGenre(e) {
    this.props.updateGenre({
      name: e.target.value
    });
  }

  handleUpdateLabel(e) {
    this.props.updateLabel({
      name: e.target.value
    });
  }

  render() {
    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={4}>
            <FormGroup
              controlId="name"
              validationState={this.getValidationState(this.state.name)}
            >
              <ControlLabel>Disc Name</ControlLabel>
              <FormControl
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </Col>
          <Col xs={12} md={4}>
            <DropDown
              label={"Band"}
              list={this.props.bands}
              state={this.state.band}
              action={this.handleUpdateBand}
            />
          </Col>
          <Col xs={12} md={4}>
            <FormGroup
              controlId="year"
              validationState={this.getValidationState(this.state.year)}
            >
              <ControlLabel>Year</ControlLabel>
              <FormControl
                type="text"
                value={this.state.year}
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <DropDown
              label={"Genre"}
              list={this.props.genres}
              state={this.state.genre}
              action={this.handleUpdateGenre}
            />
          </Col>
          <Col xs={12} md={4}>
            <DropDown
              label={"Label"}
              list={this.props.labels}
              state={this.state.label}
              action={this.handleUpdateLabel}
            />
          </Col>
          <Col xs={12} md={4}>
            <DropDown
              label={"Country"}
              list={this.props.countries}
              state={this.state.country}
              action={this.handleUpdateCountry}
            />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  countries: state.vinyl.countries,
  bands: state.vinyl.bands,
  labels: state.vinyl.labels,
  genres: state.vinyl.genres
});

export default connect(
  mapStateToProps,
  {
    updateBand,
    updateCountry,
    updateGenre,
    updateLabel,
    fetchBands,
    fetchCountries,
    fetchGenres,
    fetchLabels
  }
)(VinylData);

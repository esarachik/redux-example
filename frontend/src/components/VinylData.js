import React, { Component } from "react";
import {
  Row,
  Col,
  FormControl,
  FormGroup,
  ControlLabel
} from "react-bootstrap";
import { getValidationState } from "../validations";

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
    this.invoke = this.invoke.bind(this);

    this.state = {
      countries: [],
      bands: [],
      genres: [],
      labels: []
    };
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

  invoke = event => e => {
    event({ name: e.target.value });
  };

  render() {
    
    const { updateBand, updateCountry, updateGenre, updateLabel } = this.props;

    return (
      <React.Fragment>
        <Row>
          <Col xs={12} md={4}>
            <FormGroup
              controlId="name"
              validationState={getValidationState(this.state.name)}
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
              action={this.invoke(updateBand)}
            />
          </Col>
          <Col xs={12} md={4}>
            <FormGroup
              controlId="year"
              validationState={getValidationState(this.state.year)}
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
              action={this.invoke(updateGenre)}
            />
          </Col>
          <Col xs={12} md={4}>
            <DropDown
              label={"Label"}
              list={this.props.labels}
              state={this.state.label}
              action={this.invoke(updateLabel)}
            />
          </Col>
          <Col xs={12} md={4}>
            <DropDown
              label={"Country"}
              list={this.props.countries}
              state={this.state.country}
              action={this.invoke(updateCountry)}
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

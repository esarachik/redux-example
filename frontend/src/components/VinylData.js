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
  fetchLabels,
  updateName,
  updateYear
} from "../actions/vinylActions";
import DropDown from "../controls/DropDown";

class VinylData extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.invoke = this.invoke.bind(this);

    this.state = {
      name: this.props.name,
      year: this.props.year,
      countries: [],
      bands: [],
      genres: [],
      labels: [],
      country: this.props.country,
      band: this.props.band,
      genre: this.props.genre,
      label: this.props.label
    };
  }

  componentWillMount = () => {
    this.props.fetchBands();
    this.props.fetchCountries();
    this.props.fetchGenres();
    this.props.fetchLabels();
  };

  handleChange = event => e => {
    this.setState({ [e.target.id]: e.target.value });
    event(e.target.value);
  };

  invoke = event => value => {   
    event({ _id: value });
  };

  render() {
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
                onChange={this.handleChange(this.props.updateName)}
              />
              <FormControl.Feedback />
            </FormGroup>
          </Col>
          <Col xs={12} md={4}>
            <DropDown
              label={"Band"}
              list={this.props.bands}
              state={this.props.band._id}
              action={this.invoke(this.props.updateBand)}
              model={'band'}
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
                onChange={this.handleChange(this.props.updateYear)}
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
              state={this.props.genre._id}
              action={this.invoke(this.props.updateGenre)}
              model={'genre'}
            />
          </Col>
          <Col xs={12} md={4}>
            <DropDown
              label={"Label"}
              list={this.props.labels}
              state={this.props.label._id}
              action={this.invoke(this.props.updateLabel)}
              model={'label'}
            />
          </Col>
          <Col xs={12} md={4}>
            <DropDown
              label={"Country"}
              list={this.props.countries}
              state={this.props.country._id}
              action={this.invoke(this.props.updateCountry)}
              model={'country'}
            />
          </Col>
        </Row>
      </React.Fragment>
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
  label: state.vinyl.label,
  genre: state.vinyl.genre
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
    fetchLabels,
    updateName,
    updateYear
  }
)(VinylData);

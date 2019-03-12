import React, { Component } from "react";
import { connect } from "react-redux";
import LoadingOverlay from 'react-loading-overlay';
import "./Loading.css";

class Loading extends Component {
  render() {
    return (
      <LoadingOverlay
        active={this.props.loading}
        spinner
        //fadeSpeed ={10}
        text="Wait for the operation"
      >
        
      </LoadingOverlay>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.image.loading
});

export default connect(mapStateToProps)(Loading);

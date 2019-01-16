import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Bienvenidos a Blog</h2>
          <p>React, Bootstrap, React-Router, y mas!</p>
          <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link>
        </Jumbotron>
        <Row>
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src='assets/gene.jpg' circle className='profile'/>
                <h3>Gene</h3>
                <p>The best bass player in the history</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src='assets/gene.jpg' circle className='profile'/>
                <h3>Gene</h3>
                <p>The best bass player in the history</p>
            </Col>
            <Col xs={12} sm={4} className="person-wrapper">
                <Image src='assets/gene.jpg' circle className='profile'/>
                <h3>Gene</h3>
                <p>The best bass player in the history</p>
            </Col>
        </Row>
        </Grid>
    );
  }
}

export default Home;

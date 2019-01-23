import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import {
  Jumbotron,
  Grid,
  Row,
  Col,
  Image,
  Button,
  Media
} from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>My Vinyl Collection</h2>
        </Jumbotron>
        <Row>
          <Col sm={2} md={2} className="person-wrapper">
            <ul>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
              <li>Item 1</li>
            </ul>
          </Col>
          <Col sm={10} md={10} className="person-wrapper">
            <Row>
              {/* Columns fot discs */}
              
                <Col sm={6} md={4} className="person-wrapper">
                  <Image
                    width={64}
                    height={64}
                    src="assets/gene.jpg"
                    alt="thumbnail"
                    className="image-thumbnail"
                  />

                  <h3>Media Heading</h3>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Col>

                <Col sm={6} md={4} className="person-wrapper">
                  <Image
                    width={64}
                    height={64}
                    src="assets/gene.jpg"
                    alt="thumbnail"
                    className="image-thumbnail"
                  />

                  <h3>Media Heading</h3>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Col>

                 <Col sm={6} md={4} className="person-wrapper">
                  <Image
                    width={64}
                    height={64}
                    src="assets/gene.jpg"
                    alt="thumbnail"
                    className="image-thumbnail"
                  />

                  <h3>Media Heading</h3>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Col>

                 <Col sm={6} md={4} className="person-wrapper">
                  <Image
                    width={64}
                    height={64}
                    src="assets/gene.jpg"
                    alt="thumbnail"
                    className="image-thumbnail"
                  />

                  <h3>Media Heading</h3>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Col>

                 <Col sm={6} md={4} className="person-wrapper">
                  <Image
                    width={64}
                    height={64}
                    src="assets/gene.jpg"
                    alt="thumbnail"
                    className="image-thumbnail"
                  />

                  <h3>Media Heading</h3>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Col>

                 <Col sm={6} md={4} className="person-wrapper">
                  <Image
                    width={64}
                    height={64}
                    src="assets/gene.jpg"
                    alt="thumbnail"
                    className="image-thumbnail"
                  />

                  <h3>Media Heading</h3>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Col>

                 <Col sm={6} md={4} className="person-wrapper">
                  <Image
                    width={64}
                    height={64}
                    src="assets/gene.jpg"
                    alt="thumbnail"
                    className="image-thumbnail"
                  />

                  <h3>Media Heading</h3>
                  <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
                    scelerisque ante sollicitudin commodo. Cras purus odio,
                    vestibulum in vulputate at, tempus viverra turpis. Fusce
                    condimentum nunc ac nisi vulputate fringilla. Donec lacinia
                    congue felis in faucibus.
                  </p>
                </Col>

            
            </Row>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;

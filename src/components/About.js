import React, { Component } from "react";
import { Image,Grid,Col } from "react-bootstrap";

class About extends Component {
  render() {
    return (
      <div>
        <Image src="assets/gene.jpg" className="header-image" />
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image src="assets/gene.jpg" className="header-image" />
            <h3>Gene Simmons</h3>
            <p>
                Separating paragraphs with blank lines is easiest for readers to
                scan, but they can also be separated by indenting their first
                lines. This is often used to take up less space, such as to save
                paper in print.
              </p>

              <p>
                Writing that is intended to be edited, such as school papers and
                rough drafts, uses both blank lines and indentation for
                separation. In finished works, combining both is considered
                redundant and amateurish.
              </p>

              <p>
                In very old writing, paragraphs were separated with a special
                character: ¶, the <i>pilcrow</i>. Nowadays, this is considered
                claustrophobic and hard to read.
              </p>
              <p>
                Separating paragraphs with blank lines is easiest for readers to
                scan, but they can also be separated by indenting their first
                lines. This is often used to take up less space, such as to save
                paper in print.
              </p>

              <p>
                Writing that is intended to be edited, such as school papers and
                rough drafts, uses both blank lines and indentation for
                separation. In finished works, combining both is considered
                redundant and amateurish.
              </p>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default About;

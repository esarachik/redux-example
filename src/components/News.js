import React, { Component } from "react";
import { Grid, Image, Row, Col } from "react-bootstrap";

class News extends Component {
  render() {
    return (
      <div>
        <Image src="assets/gene.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
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

              <p>
                In very old writing, paragraphs were separated with a special
                character: ¶, the <i>pilcrow</i>. Nowadays, this is considered
                claustrophobic and hard to read.
              </p>
            </Col>
            <Col xs={12} sm={4} className="main-section">
              <Image src="assets/gene.jpg" className="header-image" />
              <p>
                foiew fewf iwefhoiwefoi wefohw ehf ewfowefo woefhowheoif
                weohfoewfoi hfewo wef owehof weof
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default News;

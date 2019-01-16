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
              fihw fe whiohw oiefhoiw eiofh owiefhioweoif hoiwef iwhoefhhefi
              ioeowiefoowe fhowiefhwoef hwoeif
            </p>
            <p>
              fihw fe whiohw oiefhoiw eiofh owiefhioweoif hoiwef iwhoefhhefi
              ioeowiefoowe fhowiefhwoef hwoeif
            </p>
            <p>
              fihw fe whiohw oiefhoiw eiofh owiefhioweoif hoiwef iwhoefhhefi
              ioeowiefoowe fhowiefhwoef hwoeif
            </p>
            <p>
              fihw fe whiohw oiefhoiw eiofh owiefhioweoif hoiwef iwhoefhhefi
              ioeowiefoowe fhowiefhwoef hwoeif
            </p>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default About;

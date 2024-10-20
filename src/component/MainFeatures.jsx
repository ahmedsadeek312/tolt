import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../styles/MainFeatures.css"

const MainFeatures = () => {
  return (
    <Container className="main-features-section my-5">
      {/* Features and Call-to-Action */}
      <Row className="mb-5">
        <Col md={5} style={{marginLeft : "90px"}} className="feature-box yellow-box">
          <h3>Passively increase your MRR.</h3>
          <div className="info-box">
            <div className="icon-box" >
              <img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d4136b060ed177_Purpl%20Icon.svg" alt="" />
            </div>
            
            <div className="text-box">
              <p><strong>Did you know?</strong></p>
              <p>That affiliate marketing is one of the fastest and easiest ways to increase MRR.</p>
            </div>
          </div>
          <div className="info-box">
            <div className="icon-box">
            <img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d4136b060ed177_Purpl%20Icon.svg" alt="" />
            </div>
            <div className="text-box">
              <p><strong>And it's priced for every startup size!</strong></p>
              <p>Well, maybe that's not the case with our competitors, but it definitely is with Tolt!</p>
            </div>
          </div>
        </Col>
        {" "}
        <Col style={{marginLeft : "30px"}} md={5} className="feature-box blue-box">
        <img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d4131a950ed317_Spotlight%20Icon%202.svg" alt="" />
        <br /><br /><br />
          <h3>See Tolt in action</h3>
          <br />
          <p>
            We believe in transparency and want you to have the opportunity to see our software in action before committing.
            So, schedule a personalized demo call!
          </p>
          <br />
          <Button variant="light" className="demo-btn"><svg xmlns="http://www.w3.org/2000/svg" height="25" width="20" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/></svg> {" "} Schedule a demo call!</Button>
        </Col>
      </Row>

      {/* Banner Section */}
      <Row className="mb-5">
        <Col className="affiliate-software-banner text-center">
        <img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d4130db50ed28b_Badge%20Frame.svg" alt="" />
          <h4 style={{display: "inline-block"}}>#1 Affiliate software for SaaS</h4>
        </Col>
      </Row>

      {/* Blog Section */}
      <Row>
        <h3>Something from our blog</h3>
        <Col md={6}>
          <Card className="blog-card mb-4">
            <Card.Img variant="top" src="https://cdn.prod.website-files.com/6329ec26d5d41313ef0ed120/664763ad9c7a71c85cdc1bbc_Tolt%20V1-p-800.png" />
            <Card.Body>
              <Card.Text className="badge bg-danger text-white">Marketing</Card.Text>
              <Card.Title>How SaaS Affiliate Marketing Programs are Different</Card.Title>
              <Card.Text>Daniel Gjokaj, CEO @ Tolt</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="blog-card mb-4">
            <Card.Img variant="top" src="https://cdn.prod.website-files.com/6329ec26d5d41313ef0ed120/65f41edcb7d9f777d852b74c_ToltMRR-p-800.png" />
            <Card.Body>
              <Card.Text className="badge bg-danger text-white">Marketing</Card.Text>
              <Card.Title>Skyrocket Your MRR: The Power of Affiliate Marketing</Card.Title>
              <Card.Text>Daniel Gjokaj, CEO @ Tolt</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MainFeatures;

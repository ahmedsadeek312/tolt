import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/whychooseus.css'; // Custom CSS file for the specific styles

const WhyChooseUs = () => {
  return (
    <Container className="why-choose-tolt-section">


      <br />
      <Row className="mb-4">
        <Col lg={5} className="text-box blue-box mycard">
          <h3 className="section-heading">
            A great way to get <span className="highlighted-text">new customers.</span>
          </h3>
          <Card className="info-card">
            <Card.Body>
              <Card.Text>
                <img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d4136b060ed177_Purpl%20Icon.svg" alt="" />
                <br /><br />
                <strong>How?</strong> By partnering with top affiliates, you can dramatically increase your reach and drive more leads and sales.
              </Card.Text>
            </Card.Body>
          </Card>
          
          <Card className="info-card secondary-card">
            <Card.Body>
              <Card.Text>
                <img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d4136f110ed17e_Red%20Icon.svg" alt="" />
                <br /><br />
                <strong>Most affiliate programs run on autopilot!</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
            
        <Col lg={5} className="text-box dark-box">
          <h3 className="section-heading">Let marketing run on its own.</h3>
          <p className="section-text">
            Imagine what it would be like to have a team of people promoting your product for you around the clock.
          </p>
          <img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/63946924d2ca399334fbca8b_tolt-chart-mrr.webp" alt="MRR Chart" className="img-fluid" />
        </Col>
      </Row>
      <br /><br />
      <Row className="text-center">
        <Col>
          <h2 className="section-heading">
            But, why choose <span className="highlighted-text">Tolt?</span>
          </h2>
          <p className="section-text">
            Yes, there are other affiliate software providers, but our goal is to be the best, and we're almost there!
          </p>
        </Col>
      </Row>
      
    </Container>
  );
}

export default WhyChooseUs;

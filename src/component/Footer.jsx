import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import "../styles/footer.css"

const Footer = () => {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-light-purple py-4 text-center">
        <Container>
          <Button variant="warning" className="rounded-pill px-4 py-2 mb-3">
            🚀 Launch in 15 Mins!
          </Button>
        </Container>
      </header>

      {/* Main Section */}
      <main className="bg-light-purple py-5 text-center">
        <Container>
          <h1 className="fw-bold">
            Start growing on autopilot with an Affiliate Program!
          </h1>
          <p className="mb-4">
            Sign up and launch your program within 15 minutes! <br />
            Start growing your startup with Tolt!
          </p>
          <Button variant="dark" className="rounded-pill px-5 py-3">
            Launch your program!
          </Button>
        </Container>
      </main>

      {/* Footer Section */}
      <footer className="bg-light-purple pt-5 pb-3">
        <Container>
          <Row className="mb-4">
            <Col lg={4} md={12} className="text-center text-lg-start">
              <h5><strong>Tolt</strong></h5>
              <p>On a mission to help SaaS startups grow with affiliate marketing.</p>
              <Button variant="link" className="p-0 text-dark"> 
                <img src="stripe-logo.png" alt="stripe" width="40" /> {/* Place appropriate logo images */}
                <span className="ms-2">Partner</span>
              </Button>
              <div className="social-icons mt-3">
                {/* Replace with actual icons */}
                <a href="#" className="me-2 text-dark"><i className="bi bi-instagram"></i></a>
                <a href="#" className="me-2 text-dark"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-dark"><i className="bi bi-linkedin"></i></a>
              </div>
            </Col>

            {/* Footer Links */}
            <Col lg={8} md={12}>
              <Row>
                <Col md={4} sm={6}>
                  <h6>PRODUCT</h6>
                  <ul className="list-unstyled">
                    <li>Home</li>
                    <li>Dashboard</li>
                    <li>Affiliate Portal</li>
                    <li>Payments</li>
                    <li>Stripe Affiliate Program</li>
                    <li>Paddle Affiliate Program</li>
                    <li>Chargebee Affiliate Program</li>
                    <li>Pricing</li>
                  </ul>
                </Col>

                <Col md={4} sm={6}>
                  <h6>COMPARE US</h6>
                  <ul className="list-unstyled">
                    <li>Rewardful Alternative</li>
                    <li>FirstPromoter Alternative</li>
                    <li>LinkMink Alternative</li>
                    <li>PartnerStack Alternative</li>
                    <li>Tapfiliate Alternative</li>
                    <li>LeadDyno Alternative</li>
                  </ul>
                </Col>

                <Col md={4} sm={12}>
                  <h6>RESOURCES</h6>
                  <ul className="list-unstyled">
                    <li>Blog</li>
                    <li>Tolt Academy</li>
                    <li>Our Affiliate Program</li>
                    <li>Help Center</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>Listen to our Podcast on Google</li>
                    <li>Listen to our Podcast on Amazon</li>
                    <li>Search</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* Copyright */}
          <Row className="text-center">
            <Col>
              <p>&copy; All rights reserved by Ahmed & Habiba, Inc.</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;

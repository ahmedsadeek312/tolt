import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/feature.css";

const Feature = () => {
  return (
    <Container className="features-section my-5">
      <Row className="align-items-center">
        {/* Left Column - Text and Illustration */}
        <Col xs={12} md={6} className="left-section">
          <div className="text-box">
            <img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d41310320ed305_unboxing%201.svg" alt="" />
            <h2 className="mb-4">
              Just some more <br />
              features that <br />
              <span className="highlighted-text">make us better</span> <br />
              than the competition!
            </h2>
          </div>
        </Col>

        {/* Right Column - Feature List */}
        <Col xs={12} md={6}>
          <Row>
            <Col xs={6} className="feature-item">
              <div className="feature-icon">
                <img width="40" height="80" src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d4137b960ed29e_laptop%201.svg" alt="" />
              </div>
              <h5>Easy to use</h5>
              <p>Our intuitive dashboard is designed to lower your time managing your affiliate program.</p>
            </Col>

            <Col xs={6} className="feature-item">
              <div className="feature-icon">
                <img width="40" height="80" src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d413a56c0ed30a_chart%201.svg" alt="" />
              </div>
              <h5>Percentage or fixed commission</h5>
              <p>Offer your affiliates a percentage of your SaaS plans or a fixed commission for every paid sign-up.</p>
            </Col>

            <Col xs={6} className="feature-item">
              <div className="feature-icon">
                <img height="80" width="40" src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d413d5780ed309_push-pins%201.svg" alt="" />
              </div>
              <h5>Synced with Stripe, Paddle and Chargebee</h5>
              <p>2-way sync with Stripe, Paddle, and Chargebee so we immediately know when a customer subscribes or cancels.</p>
            </Col>

            <Col xs={6} className="feature-item">
              <div className="feature-icon">
                <img height="80" width="40" src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d413ec7c0ed2d8_user%201.svg" alt="" />
              </div>
              <h5>Manually approve affiliates</h5>
              <p>Approve all affiliates automatically or have affiliates apply for access.</p>
            </Col>

            <Col xs={6} className="feature-item">
              <div className="feature-icon">
                <img height="80" width="40" src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d4137ca90ed30e_discussion%201.svg" alt="" />
              </div>
              <h5>Custom email notifications</h5>
              <p>Edit and brand email notifications for your affiliates.</p>
            </Col>

            <Col xs={6} className="feature-item">
              <div className="feature-icon">
                <img width="40" height="80" src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6329ec26d5d41334f40ed30d_gear%201.svg" alt="" />
              </div>
              <h5>Cross subdomain tracking</h5>
              <p>Track your affiliates across both root and subdomains seamlessly.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Feature;

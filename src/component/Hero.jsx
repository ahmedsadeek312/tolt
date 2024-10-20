// src/components/Hero.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <h1>
            <span style={{ color: '#FF00FF', fontWeight: 'bold' }}>Affiliate Marketing</span>
            <br />
            software for SaaS startups
          </h1>
          <p>
            An all-in-one solution to launch your own affiliate program. Tolt helps SaaS startups build and run their affiliate and referral programs. Works with Stripe, Paddle, and Chargebee.
          </p>
          <Button variant="dark">Launch your program!</Button>
          <div className="mt-3">
            <img src="https://th.bing.com/th/id/OIP.pkg7upZNu2uqL8bbWnPtUAHaBo?w=338&h=77&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Capterra" width="150" />
            {/* Include similar badges here */}
          </div>
        </Col>
        <Col md={6}>
          <img
            src="https://postimage.me/images/2024/10/19/Screenshot-2024-10-19-191709.png" // Replace with your screenshot 
            alt="Tolt dashboard"
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Hero;

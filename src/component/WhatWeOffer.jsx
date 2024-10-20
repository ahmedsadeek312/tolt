import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, Row, Col } from 'react-bootstrap';
import '../styles/whatweoffer.css';

function WhatWeOffer() {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState('dashboard');

  // Function to handle section change
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Container className="app">
      <Header onSectionChange={handleSectionChange} activeSection={activeSection} />
      {activeSection === 'dashboard' && <DashboardSection />}
      {activeSection === 'affiliate' && <AffiliatePortalSection />}
      {activeSection === 'setup' && <Setup />}
      {activeSection === "payments" && <Payments />}
    </Container>
  );
}

function Header({ onSectionChange, activeSection }) {
  return (
    <header className="text-center my-5">
      <h1>Let's <span className="highlight">dive deeper</span> and see what Tolt has to offer!</h1>
      <Navigation onSectionChange={onSectionChange} activeSection={activeSection} />
    </header>
  );
}

function Navigation({ onSectionChange, activeSection }) {
  return (
    <Navbar expand="lg" className="justify-content-center my-4 ">
      <Nav variant="tabs" className='mynav'>
        <Nav.Item>
          <Nav.Link
            href="#"
            className={`nav-link ${activeSection === 'dashboard' ? 'dashboard-active' : ''}`}
            onClick={() => onSectionChange('dashboard')}
          >
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#"
            className={`nav-link ${activeSection === 'affiliate' ? 'affiliate-active' : ''}`}
            onClick={() => onSectionChange('affiliate')}
          >
            Affiliate Portal
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#"
            className={`nav-link ${activeSection === 'setup' ? 'setup-active' : ''}`}
            onClick={() => onSectionChange('setup')}
          >
            Setup
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#"
            className={`nav-link ${activeSection === 'payments' ? 'payments-active' : ''}`}
            onClick={() => onSectionChange('payments')}
          >
            Payments
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}

function DashboardSection() {
  return (
    <Row className="dashboard-section align-items-center">
      <Col md={6} className="text-center">
      <img className="img-fluid"  src="https://postimage.me/images/2024/10/19/Screenshot-2024-10-19-191709.png" alt="Screenshot 2024 10 19 191709" border="0"/>        
      </Col>
      <Col md={6}>
        <h2>An easy way to manage your affiliate program.</h2>
        <ul>
          <li>Invite, Track and Manage</li>
          <p>Manage your affiliates with a point of a click. You can edit, delete, and view affiliates and referrals within two clicks.</p>
          <li>The stats that help your program grow</li>
          <p>See how your affiliates are doing, compare them, and check their conversion rate, earnings, and more!</p>
        </ul>
        <Button variant="dark">Take a look inside our dashboard &rarr;</Button>
      </Col>
    </Row>
  );
}

function AffiliatePortalSection() {
  return (
    <Row className="affiliate-portal-section align-items-center">
      <Col md={6} className="text-center">
      <img src="https://postimage.me/images/2024/10/19/5.png" alt="5" border="0" className="img-fluid" />
      </Col>
      <Col md={6}>
        <h2>Cool & Branded portal for your affiliates.</h2>
        <ul>
          <li>Make affiliates feel like home</li>
          <p>Your affiliates might also be your users, so Tolt ensures you can match your affiliate portal with your brand.</p>
          <li>Use your own domain</li>
          <p>
            We get it; there’s no fun using other software’s subdomains, so with Tolt, you can add your domain (i.e., affiliates.yourdomain.com).
          </p>
        </ul>
        <Button variant="dark">A branded affiliate portal for affiliates &rarr;</Button>
      </Col>
    </Row>
  );
}


function Setup() {
    return (
      <Row className="affiliate-portal-section align-items-center">
        <Col md={6} className="text-center">
        <img src="https://postimage.me/images/2024/10/19/6.png" alt="6" border="0" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>Get your program up and running within 15 minutes!</h2>
          <ul>
            <li>Easy and quick setup</li>
            <p>Get up and running real quick with our Stripe and Paddle integrations.</p>
            <li>Client and server side options</li>
            <p>
            Tolt offers both client and server side integration options to ensure seamless compatibility with any type of app.
            </p>
          </ul>
          <Button variant="dark">Stripe &rarr; </Button>
          {"  "}
          <Button variant="dark">Paddle &rarr; </Button>
          {"  "}
          <Button variant="dark">Chargebee &rarr;</Button>
        </Col>
      </Row>
    );
  }

  
function Payments() {
    return (
      <Row className="affiliate-portal-section align-items-center">
        <Col md={6} className="text-center">
        <img src="https://postimage.me/images/2024/10/19/7.png" alt="7" border="0" className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2>Get your program up and running within 15 minutes!</h2>
          <ul>
            <li>Easy and quick setup</li>
            <p>Get up and running real quick with our Stripe and Paddle integrations.</p>
            <li>Client and server side options</li>
            <p>
            Tolt offers both client and server side integration options to ensure seamless compatibility with any type of app.
            </p>
          </ul>
          <Button variant="dark">Stripe &rarr; </Button>
          {"  "}
          <Button variant="dark">Paddle &rarr; </Button>
          {"  "}
          <Button variant="dark">Chargebee &rarr;</Button>
        </Col>
      </Row>
    );
  }         


export default WhatWeOffer;

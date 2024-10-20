
import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';

const Features = () => {
  return (
    <div style={{ backgroundColor: '#000066', color: 'white', padding: '5rem 0' }}>
      <Container fluid="lg" className="text-center">
        <h2 className="mb-4" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
          <span style={{ backgroundColor: '#FFDD00', padding: '0.2rem 0.4rem', borderRadius: '5px' }}>Everything</span> to help your SaaS grow with Affiliate Marketing
        </h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '4rem' }}>
          Maximize your SaaS growth potential with the power of Affiliate Marketing!
        </p>
        <Row className="g-4">
          {/* Feature 1 */}
          <Col md={4}>
            <Card className="h-100" style={{ backgroundColor: '#1C1C6D', padding: '20px', borderRadius: '12px' }}>
              <Card.Img
                variant="top"
                src="https://postimage.me/images/2024/10/19/18fa0d770c87ff466.png" 
                style={{ width: '50px', margin: '0 auto' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>
                  Auto Payouts with PayPal and Wise
                </Card.Title>
                <Card.Text style={{ color: '#CCCCCC' }}>
                  Let us handle the tedious task of affiliate payments so you can focus on building your startup!
                </Card.Text>
                <a href="#payouts" style={{ color: '#FFDD00', textDecoration: 'none', fontWeight: 'bold' }}>
                  Auto Affiliates Payouts
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 2 */}
          <Col md={4}>
            <Card className="h-100" style={{ backgroundColor: '#1C1C6D', padding: '20px', borderRadius: '12px' }}>
              <Card.Img
                variant="top"
                src="https://postimage.me/images/2024/10/19/2.png" 
                style={{ width: '50px', margin: '0 auto' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>
                  Branded Portal for your Affiliates
                </Card.Title>
                <Card.Text style={{ color: '#CCCCCC' }}>
                  Change the look and feel of your affiliate portal to match your startup brand!
                </Card.Text>
                <a href="#portal" style={{ color: '#FFDD00', textDecoration: 'none', fontWeight: 'bold' }}>
                  Branded Portal
                </a>
              </Card.Body>
            </Card>
          </Col>

          {/* Feature 3 */}
          <Col md={4}>
            <Card className="h-100" style={{ backgroundColor: '#1C1C6D', padding: '20px', borderRadius: '12px' }}>
              <Card.Img
                variant="top"
                src="https://postimage.me/images/2024/10/19/3.png" 
                style={{ width: '50px', margin: '0 auto' }}
              />
              <Card.Body>
                <Card.Title style={{ fontSize: '1.5rem', color: 'white', fontWeight: 'bold' }}>
                  Integration with Stripe and Paddle
                </Card.Title>
                <Card.Text style={{ color: '#CCCCCC' }}>
                  Integrate Stripe, Paddle or Chargebee within 15 minutes, so Tolt doesn’t miss a referral!
                </Card.Text>
                <a href="#integration" style={{ color: '#FFDD00', textDecoration: 'none', fontWeight: 'bold' }}>
                  Stripe & Paddle
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Features;

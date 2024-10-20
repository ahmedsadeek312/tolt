
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "../styles/partiner.css"

const Partners = () => {
  return (
    <Container className="text-center my-5">
      <div className='myp'>
        <span>Backed by leading investors</span>
        </div>
        <div className='myimage'>
        <img width="120" src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6529448cab46edcb3d55b8df_62bb9c5e9379f83cc7cc2513_launch_Artboard%203_white%20(3)-p-500.svg" alt="" />
        </div>
      
      <Row className="justify-content-center">
        <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/65b9619ebc9a36f158fe6e78_musicfylogo.svg" alt="Musicfy" width="100" /></Col>
        <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/65c4b370a7ebcb4fa9ffad6d_6577ac86d3e376c4d5f8243e_logo.svg" alt="Speak" width="100" /></Col>
        <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6454d0ce8ef8f62be67dc36c_61c0debf73a9933e580459cc_logo%20(1).svg" alt="Practice" width="100" /></Col>
        <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6529423aace0c95f08e2472e_logo-on-light-200x52.svg" alt="Creately" width="100" /></Col>
        <Col xs={6} md={2}><img src="https://cdn.prod.website-files.com/6329ec26d5d4133a1b0ed116/6530f0d80bb49d25a59bd112_652a6ac279cbf4ed07e3c38d_persuvalogo%20(1).svg" alt="Persuva" width="100" /></Col>
      </Row>
    </Container>
  );
};

export default Partners;

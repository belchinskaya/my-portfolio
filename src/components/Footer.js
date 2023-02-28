import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/kate.png";
import github from '../assets/img/socials/github.svg';
import telegram from '../assets/img/socials/telegram.svg';
import linkedin from '../assets/img/socials/linkedin.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img style={{borderRadius: '70px'}} src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/kateryna-belchynska/"><img src={linkedin} alt="linkedin" /></a>
              <a href="https://www.t.me/belchynska"><img src={telegram} alt="telegram" /></a>
              <a href="https://github.com/belchinskaya"><img src={github} alt="github" /></a>
            </div>
            <p>Thank you for attention</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

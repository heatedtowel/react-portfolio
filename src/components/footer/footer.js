import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import pdf from '../header/assets/Resume.pdf';

import { FaPortrait, FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

export default function Footer() {
  return (
    <Container className="footer p-2">
      <Col xs={12}>
        <Row center="xs">
          <Col xs={3} lg={3}>
            <div>
              <div>
                <a href={pdf}>
                  <FaPortrait size={33} />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={3} lg={3}>
            <div>
              <div>
                <a href="mailto:heateddiv@gmail.com" target='_blank' rel="noreferrer">
                  <FaMailBulk size={33} />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={3} lg={3}>
            <div>
              <div>
                <a href="https://www.linkedin.com/in/jessemonks/" target='_blank' rel="noreferrer" className="text-muted">
                  <FaLinkedinIn size={33} />
                </a>
              </div>
            </div>
          </Col>
          <Col xs={3} lg={3} className="contactInfo text-center">
            <div>
              <div>
                <a href="https://github.com/heatedtowel" target='_blank' rel="noreferrer"><FaGithub size={33} /></a>
              </div>
            </div>
          </Col>
        </Row>
      </Col>
    </Container>
  )
}
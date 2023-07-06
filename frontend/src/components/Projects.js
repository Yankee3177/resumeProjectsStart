import { Card, Container, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  const handleMouseEnter = (index) => {
    setHovered(index);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  return (
    <section id="projects">
      <h2 className='mainHeader'>My Projects</h2>
      <Container className='Container-Project'>
        <Row className='card-row'>
          <Col className='card-column'>
            <Row className='card-row'>
              <Card className="project-card">
                <Card.Title>Recipe App</Card.Title>
                <div
                  className={`image-container `}
                  onMouseEnter={() => handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card.Img src='/images/Photo1.jpg' style={{opacity:hovered === 0 ? 0.7 : 1}} />
                  {hovered === 0 && (
                    <div className="overlay">
                      <Card.Subtitle>This is a test to see if it works</Card.Subtitle>
                    </div>
                  )}
                </div>
              </Card>
            </Row>
            <Row className='card-row'>
              <Card className="project-card">
                <Card.Title>Class SQL interface</Card.Title>
                <div
                  className={`image-container `}
                  onMouseEnter={() => handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card.Img src='/images/Photo1.jpg' style={{opacity:hovered === 1 ? 0.7 : 1}}/>
                  {hovered === 1 && (
                    <div className="overlay">
                      <Card.Subtitle>This is a test to see if it works</Card.Subtitle>
                    </div>
                  )}
                </div>
              </Card>
            </Row>
          </Col>
          <Col className='card-column'>
            <Row className='card-row'>
              <Card className="project-card">
                <Card.Title>Stitching Design</Card.Title>
                <div
                  className={`image-container `}
                  onMouseEnter={() => handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card.Img src='/images/Photo1.jpg' style={{opacity:hovered === 2 ? 0.7 : 1}} />
                  {hovered === 2 && (
                    <div className="overlay">
                      <Card.Subtitle>This is a test to see if it works</Card.Subtitle>
                    </div>
                  )}
                </div>
              </Card>
            </Row>
            <Row className='card-row'>
              <Card className="project-card">
                <Card.Title>Caesar Encryption</Card.Title>
                <div
                  className={`image-container`}
                  onMouseEnter={() => handleMouseEnter(3)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Card.Img src='/images/Photo1.jpg' style={{opacity:hovered === 3 ? 0.7 : 1}} />
                  {hovered === 3 && (
                    <div className="overlay">
                      <Card.Subtitle>This is a test to see if it works</Card.Subtitle>
                    </div>
                  )}
                </div>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

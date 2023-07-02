import { Card, Container, Row, Col } from 'react-bootstrap';

export default function Projects() {
  return (
    <section id="projects">
      <h2 style={{ textAlign: 'center' }}>My Projects</h2>
      <Container className='Container-Project'>
        <Row className='card-row'>
          <Col className='card-column'>
            <Row className='card-row'>
              <Card className="project-card">
                <Card.Title>Project 1</Card.Title>
                <Card.Img src='/Photo1.jpg' />
                <Card.Body>
                  <Card.Subtitle>This is a test to see if it works</Card.Subtitle>
                </Card.Body>
              </Card>
            </Row>
            <Row className='card-row'>
              <Card className="project-card">
                <Card.Title>Project 3</Card.Title>
                <Card.Img src='/Photo1.jpg' />
                <Card.Body>
                  <Card.Subtitle>This is a test to see if it works</Card.Subtitle>
                </Card.Body>
              </Card>
            </Row>
          </Col>
          <Col className='card-column'>
            <Row className='card-row'>
              <Card className="project-card">
                <Card.Title>Project 2</Card.Title>
                <Card.Img src='/Photo1.jpg' />
                <Card.Body>
                  <Card.Subtitle>This is a test to see if it works</Card.Subtitle>
                </Card.Body>
              </Card>
            </Row>
            <Row className='card-row'>
              <Card className="project-card">
                <Card.Title>Project 4</Card.Title>
                <Card.Img src='/Photo1.jpg' />
                <Card.Body>
                  <Card.Subtitle>This is a test to see if it works</Card.Subtitle>
                </Card.Body>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

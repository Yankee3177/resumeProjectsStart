import {Card } from 'react-bootstrap';

export default function Projects() {
  return (
    <section id="projects">
      <h2 className='mainHeader'>My Projects</h2>
        <Card style={{gridRow:2 , gridColumn:1, padding:10}}>
            <Card.Title>Project 1</Card.Title>
            <Card.Img src='/Photo1.jpg' />
            <Card.Body>
            <Card.Subtitle>This is a test to see if it works</Card.Subtitle>
            </Card.Body>
        </Card>

        <Card style={{gridRow:2 , gridColumn:2, padding:10}}>
              <Card.Title>Project 1</Card.Title>
              <Card.Img src='/Photo1.jpg' />
              <Card.Body>
                <Card.Subtitle>This is a test to see if it works</Card.Subtitle>
              </Card.Body>
            </Card>
      
    </section>
  );
}

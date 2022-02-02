import { Card } from 'react-bootstrap'

export default function AboutMe() {
  return (
    <Card border="primary" style={{ width: '18rem' }} className='bg-muted'>
      <Card.Body>
        <Card.Title>About Me</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk
          of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  )
};
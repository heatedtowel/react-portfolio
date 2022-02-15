import {
  Card,
  Container,
  Row,
  Col,
} from 'react-bootstrap'

import Popover from '../popover/popover'
import presGallary from './assets/images/gabby-orcutt-3QUklJkVFyY-unsplash.jpg';
import moviecritix from './assets/images/myke-simon-atsUqIm3wxo-unsplash.jpg';
import passwordGenerator from './assets/images/jason-dent-3wPJxh-piRw-unsplash.jpg';
import weatherDashboard from './assets/images/noaa-ZVhm6rEKEX8-unsplash.jpg';
import codingChallange from './assets/images/matt-walsh-tVkdGtEe2C4-unsplash.jpg';
import eCommerce from './assets/images/mark-konig-Tl8mDaue_II-unsplash.jpg'
import './assets/css/style.css'


export default function Repos() {

  const projects = [
    {
      'projectName': 'Presidential Gallary',
      'repoName': 'https://github.com/mattholtmoore/presidential-gallery',
      'deployed': 'https://floating-chamber-62136.herokuapp.com/',
      'img': presGallary
    },
    {
      'projectName': 'MovieCritix',
      'repoName': 'https://github.com/heatedtowel/moviecritix',
      'deployed': 'https://heatedtowel.github.io/moviecritix/',
      'img': moviecritix
    },
    {
      'projectName': 'Password Generator',
      'repoName': 'https://github.com/heatedtowel/password-generator',
      'deployed': 'https://heatedtowel.github.io/password-generator/',
      'img': passwordGenerator
    },
    {
      'projectName': 'Weather Dashboard',
      'repoName': 'https://github.com/heatedtowel/weather-dashboard',
      'deployed': 'https://heatedtowel.github.io/weather-dashboard/',
      'img': weatherDashboard
    },
    {
      'projectName': 'Coding Challange',
      'repoName': 'https://github.com/heatedtowel/coding-challange',
      'deployed': 'https://heatedtowel.github.io/coding-challange/',
      'img': codingChallange
    },
    {
      'projectName': 'E-Commerce Back End',
      'repoName': 'https://github.com/heatedtowel/e-commerce-back-end',
      'deployed': 'https://heatedtowel.github.io/e-commerce-back-end/',
      'img': eCommerce
    }
  ];

  return (
    <Container fluid>
      <Row className='pt-4'>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={projects[0].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[0]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={projects[1].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[1]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row className='pt-4'>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={projects[2].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[2]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={projects[3].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[3]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="bg-dark text-white">
            <Card.Img src={projects[4].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[4]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
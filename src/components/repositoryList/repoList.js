import { Card, Container, Row, Col, } from 'react-bootstrap'
import Popover from '../popover/popover'
import vinylCollection from './assets/images/vinyl.jpg';
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
      'projectName': 'Vinyl Collection',
      'repoName': 'https://github.com/simone188535/apollo-mern-mongo',
      'deployed': 'https://guarded-mesa-92064.herokuapp.com/',
      'description': 'This is a website that allows the user to search and select vinyl records of their choosing by Artist, Song or Genre - also allowing them to add individual vinyls to a collection of favorites and display them on their personal profile page. Technology: React, Apollo GraphQL, Node, Express, Mongoose and MongoDB',
      'img': vinylCollection
    },
    {
      'projectName': 'Presidential Gallery',
      'repoName': 'https://github.com/mattholtmoore/presidential-gallery',
      'deployed': 'https://floating-chamber-62136.herokuapp.com/',
      'description': 'Allows a user to view current and past presidents along with the ability to log in and out to find additional details on specific presidents.',
      'img': presGallary
    },
    {
      'projectName': 'MovieCritix',
      'repoName': 'https://github.com/heatedtowel/moviecritix',
      'deployed': 'https://heatedtowel.github.io/moviecritix/',
      'description': 'Search engine for movies that provide detailed information on the movie along with correlating Gifs. You may also randomize the movie search if looking for something new to watch.',
      'img': moviecritix
    },
    {
      'projectName': 'Password Generator',
      'repoName': 'https://github.com/heatedtowel/password-generator',
      'deployed': 'https://heatedtowel.github.io/password-generator/',
      'description': 'Generates a password based on user feedback on complexity.',
      'img': passwordGenerator
    },
    {
      'projectName': 'Weather Dashboard',
      'repoName': 'https://github.com/heatedtowel/weather-dashboard',
      'deployed': 'https://heatedtowel.github.io/weather-dashboard/',
      'description': 'Find the weather in your city along with a 5-day forcast. Also stores previous search results for later.',
      'img': weatherDashboard
    },
    {
      'projectName': 'Coding Challange',
      'repoName': 'https://github.com/heatedtowel/coding-challange',
      'deployed': 'https://heatedtowel.github.io/coding-challange/',
      'description': 'A simple game that tests your knowledge on JS, HTML, and CSS each incorrect answer will deduct time from the current time remaining. Built in vanilla JS',
      'img': codingChallange
    },
    {
      'projectName': 'E-Commerce Back End',
      'repoName': 'https://github.com/heatedtowel/e-commerce-back-end',
      'deployed': 'https://heatedtowel.github.io/e-commerce-back-end/',
      'description': 'The goal is to be able to update the products/categories/tags with api requests. Each will be able to add/update/remove/find by id using insomnia requests.',
      'img': eCommerce
    }
  ];

  return (
    <Container fluid>
      <Row>
        <Col className='col-12 col-sm-6 mt-4'>
          <Card>
            <Card.Img src={projects[0].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[0]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card>
            <Card.Img src={projects[1].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[1]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className='col-12 col-sm-4 mt-4'>
          <Card>
            <Card.Img src={projects[2].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[2]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='col-12'>
            <Card.Img src={projects[3].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[3]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col className='mt-4'>
          <Card className='col-12'>
            <Card.Img src={projects[4].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[4]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className='mt-4'>
          <Card className='col-12'>
            <Card.Img src={projects[5].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[5]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className='col-12 mt-4'>
            <Card.Img src={projects[6].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title>
                <Popover repo={projects[6]} />
              </Card.Title>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
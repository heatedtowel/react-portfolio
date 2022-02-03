// import Repo from "../repository/repo";
import { Card } from 'react-bootstrap'

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
    <div className="p-5 min-vh-100">
      <div className="row">
        <div className="col-12 col-md">
          <Card>
            <Card.Img src={projects[0].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='title fs-1 p-1'>{projects[0].projectName}</Card.Title>
              <a href={projects[0].repoName}><Card.Text>Repository</Card.Text></a>
              <a href={projects[0].deployed}><Card.Text>Deployed App</Card.Text></a>

            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-12 col-md-6 mb-2">
          <Card>
            <Card.Img src={projects[1].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='title fs-1'>{projects[1].projectName}</Card.Title>
              <a href={projects[1].repoName}><Card.Text>Repository</Card.Text></a>
              <a href={projects[1].deployed}><Card.Text>Deployed App</Card.Text></a>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-12 col-md">
          <Card>
            <Card.Img src={projects[2].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='title fs-1'>{projects[2].projectName}</Card.Title>
              <a href={projects[2].repoName}><Card.Text>Repository</Card.Text></a>
              <a href={projects[2].deployed}><Card.Text>Deployed App</Card.Text></a>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md">
          <Card>
            <Card.Img src={projects[3].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='title fs-1'>{projects[3].projectName}</Card.Title>
              <a href={projects[3].repoName}><Card.Text>Repository</Card.Text></a>
              <a href={projects[3].deployed}><Card.Text>Deployed App</Card.Text></a>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <Card.Img src={projects[4].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='title fs-1'>{projects[4].projectName}</Card.Title>
              <a href={projects[4].repoName}><Card.Text>Repository</Card.Text></a>
              <a href={projects[4].deployed}><Card.Text>Deployed App</Card.Text></a>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="col-12 col-md">
          <Card>
            <Card.Img src={projects[5].img} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title className='title fs-1'>{projects[5].projectName}</Card.Title>
              <a href={projects[5].repoName}><Card.Text>Repository</Card.Text></a>
              <a href={projects[5].deployed}><Card.Text>Deployed App</Card.Text></a>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  )
}
import Motivation from '../Motivation/motivation';
import AboutMe from '../AboutMe/aboutMe';
import Projects from '../repositoryList/repoList'
import './assets/css/homepage.css'

export default function Homepage({ theme }) {

  const homeVariant = {
    aboutMe: {
      card: {
        opacity: 1,
        x: 0,
        borderRadius: '1rem',
        transition: {
          y: { duration: .5 },
          opacity: { duration: .5 },
          borderRadius: { duration: .5 },
          backgroundColor: { duration: .5 }
        }
      }
    },
    motivation: {
      card: {
        opacity: 1,
        x: 0,
        borderRadius: '1rem',
        transition: {
          y: { duration: .5 },
          opacity: { duration: .5 },
          borderRadius: { duration: .5 },
          backgroundColor: { duration: .5 }
        }
      }
    },
    skills: {
      card: {
        opacity: 1,
        x: 0,
        borderRadius: '1rem',
        transition: {
          staggerChildren: 0.2,
          y: { duration: .5 },
          opacity: { duration: .5 },
          borderRadius: { duration: .5 },
          backgroundColor: { duration: .5 }
        }
      }
    },
  }

  return (
    <div className='main--container'>
      <AboutMe key='About Me' variant={homeVariant} theme={theme} />
      <Motivation key='Motivation' variant={homeVariant} theme={theme} />
      <Projects />
    </div>
  )
};
import { Tabs, Tab } from 'react-bootstrap'
import { motion } from 'framer-motion'
import './assets/css/aboutMe.css'

export default function AboutMe() {

  const animation = {
    main: {
      opacity: 1,
      scale: [0, 1]
    },
    secondary: {
      opacity: 1,
      scale: [0, 1],
      x: [-400, 0]
    }
  }

  const transition = {
    main: {
      opacity: { duration: 3 },
      scale: { duration: 1.25 },
      y: { duration: 1.5 }
    },
    secondary: {
      duration: 2
    }
  }

  return (
    <motion.div
      animate={animation.main}
      transition={transition.main}
      className="infoCard row  mt-5  col-11 col-lg-6 m-auto rounded">
      <Tabs
        defaultActiveKey="About Me"
        id="uncontrolled-tab-example"
        className="mb-3">
        <Tab
          eventKey="About Me"
          title="About Me"
          className='text-light justify-content-center align-items-center'>
          Full-stack Developer with 4+ years experience in the administration of G-Suite, Atlassian, Slack, and Microsoft applications. I have worked as a Systems Analyst who determined laptop lifecycle and specifications as well as onboarding/offboarding of users and equipment. Experience in front-end web development with proficiencies in HTML, CSS, and JavaScript. Working towards full-stack development, proficient in front-end web development and javascript. Great collaboration and leadership skills, along with advanced problem solving and technical skills. It is my technical expertise in full-stack development,  my passion, and my leadership that make me an advantageous candidate for any team.

          The motivation behind transitioning to want to become a developer is my drive for continuous personal development along with a love for problem solving. I have immense problem solving skills from being an automotive technician for 5+ years and with a love for technology made the switch to IT. Bridging the gap between IT and web development came from a passion for creating things and wanting to expand my knowledge in my field along with bringing in new opportunities for growth.
        </Tab>
        <Tab
          eventKey="Skills"
          title="Skills"
          className='col-2'>
          <ul>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              React.js
            </li>
          </ul>
          <ul>
            <li>
              HTML
            </li>
            <li>
              CSS
            </li>
            <li>
              JavaScript
            </li>
            <li>
              React.js
            </li>
          </ul>
        </Tab>
      </Tabs>
    </motion.div>
  )
};
import { motion } from 'framer-motion'
import './assets/css/aboutMe.css'

export default function AboutMe() {
  return (
    <motion.div
      animate={{
        opacity: 1,
        y: [400, 0],
        scale: [0, 1]
      }}
      transition={{
        opacity: { duration: 3 },
        scale: { duration: 1.5 },
        y: { duration: 1.5 }
      }}
      className="infoCard row  mt-5 justify-content-center align-items-center col-11 col-lg-6 m-auto rounded">
      <form className="form container col-12 col-lg-9 p-1">
        <motion.div animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <motion.h2 animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-light text-center aboutMe">About Me</motion.h2>
        </motion.div>
        <div>
          <motion.p animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-light mt-1 text-start bio ">Full-stack Developer with 4+ years experience in the administration of G-Suite, Atlassian, Slack, and Microsoft applications. I have worked as a Systems Analyst who determined laptop lifecycle and specifications as well as onboarding/offboarding of users and equipment. Experience in front-end web development with proficiencies in HTML, CSS, and JavaScript. Working towards full-stack development, proficient in front-end web development and javascript. Great collaboration and leadership skills, along with advanced problem solving and technical skills. It is my technical expertise in full-stack development,  my passion, and my leadership that make me an advantageous candidate for any team.

            The motivation behind transitioning to want to become a developer is my drive for continuous personal development along with a love for problem solving. I have immense problem solving skills from being an automotive technician for 5+ years and with a love for technology made the switch to IT. Bridging the gap between IT and web development came from a passion for creating things and wanting to expand my knowledge in my field along with bringing in new opportunities for growth.
          </motion.p>
        </div>
      </form>
    </motion.div>
  )
};
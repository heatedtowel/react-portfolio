import './App.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/header/header';
import RepoList from './components/repositoryList/repoList';
import Homepage from './components/Homepage/homepage.js'
import ContactMe from './components/contactMe/contactMe'
import Footer from './components/footer/footer'

function App() {

  const [currentTab, setCurrentTab] = useState('About Me');
  const [theme, setCurrentTheme] = useState(false);

  const updateTab = (tab) => {
    setCurrentTab(tab)
  }

  const updateTheme = () => {
    setCurrentTheme(!theme)
  }

  const appVariant = {
    tabInitial: {
      opacity: 0,
      transition: {
        opacity: { duration: 1.5 },
      }
    },
    tabAnimate: {
      opacity: 1,
      transition: {
        opacity: { duration: 1.5 },
      }
    },
    tabExit: {
      opacity: 0,
      transition: {
        scaleY: { duration: 1.5 },
      }
    }
  }

  return (
    <div className='App' data-theme={theme} key={currentTab}>
      <header>
        <Header updateTab={updateTab} updateTheme={updateTheme} theme={theme} />
      </header>
      <AnimatePresence exitBeforeEnter>
        <motion.section
          key={currentTab}
          className="app--container"
          variants={appVariant}
          initial='tabInitial'
          animate='tabAnimate'
          exit='tabExit'
        >
          {currentTab === 'Projects' ? <RepoList /> : null}
          {currentTab === 'About Me' ? <Homepage theme={theme} /> : null}
          {currentTab === 'Contact Me' ? <ContactMe /> : null}
        </motion.section>
      </AnimatePresence >
      <Footer />
    </div>
  );
}

export default App;
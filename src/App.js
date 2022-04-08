import './App.css';
import { useState } from 'react';
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

  return (
    <div className='App' data-theme={theme}>
      <header>
        <Header updateTab={updateTab} updateTheme={updateTheme} theme={theme} />
      </header>
      <section className="d-flex container min-vh-100">
        {currentTab === 'Projects' ? <RepoList /> : null}
        {currentTab === 'About Me' ? <Homepage /> : null}
        {currentTab === 'Contact Me' ? <ContactMe /> : null}
      </section>
      <Footer />
    </div>
  );
}

export default App;
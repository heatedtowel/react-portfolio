import './App.css';
import { useState } from 'react';
import Header from './components/header/header';
import RepoList from './components/repositoryList/repoList';
import AboutMe from './components/aboutMe/aboutMe';
import ContactMe from './components/contactMe/contactMe'
import Footer from './components/footer/footer'

function App() {

  const [currentTab, setCurrentTab] = useState('About Me');
  const [theme, setCurrentTheme] = useState('App--dark');

  const updateTab = (tab) => {
    setCurrentTab(tab)
  }

  const updateTheme = (theme) => {
    setCurrentTheme(theme)
  }

  return (
    <div className={theme}>
      <header>
        <Header updateTab={updateTab} updateTheme={updateTheme} />
      </header>
      <section className="d-flex container min-vh-100 justify-items-center">
        {currentTab === 'Projects' ? <RepoList /> : null}
        {currentTab === 'About Me' ? <AboutMe /> : null}
        {currentTab === 'Contact Me' ? <ContactMe /> : null}
      </section>
      <Footer />
    </div>
  );
}

export default App;
import './App.css';
import { useState } from 'react';
import Header from './components/header/header';
import RepoList from './components/repositoryList/repoList';
import AboutMe from './components/aboutMe/aboutMe';
import ContactMe from './components/contactMe/contactMe'
import Footer from './components/footer/footer'

function App() {

  const [currentTab, setCurrentTab] = useState('About Me');

  return (
    <div className="App">
      <header>
        <Header updateTab={(tab) => setCurrentTab(tab)} currentTab={currentTab} />
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
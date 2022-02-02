import './App.css';
import { useState } from 'react';
import Header from './components/header/header';
import RepoList from './components/repositoryList/repoList';
import AboutMe from './components/aboutMe/aboutMe';
import ContactMe from './components/contactMe/contactMe'
import Footer from './components/footer/footer'

function App() {

  const [currentTab, setCurrentTab] = useState('Projects');

  return (
    <div className="App">
      <header>
        <Header updateTab={(tab) => setCurrentTab(tab)} currentTab={currentTab} />
      </header>
      <section className="container bg-secondary mw-100 min-vh-100">
        {currentTab === 'Projects' ? <RepoList /> : null}
        {currentTab === 'About Me' ? <AboutMe /> : null}
        {currentTab === 'Contact Me' ? <ContactMe /> : null}
      </section>
      <Footer />
    </div>
  );
}

export default App;
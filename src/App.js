import './App.css';
import { useState } from 'react';
import Header from './components/header/header';
import RepoList from './components/repositoryList/repoList';
import AboutMe from './components/aboutMe/aboutMe';
import ContactMe from './components/contactMe/contactMe'

function App() {

  const [currentTab, setCurrentTab] = useState('Projects');

  return (
    <div className="App">
      <header>
        <Header updateTab={(tab) => setCurrentTab(tab)} currentTab={currentTab} />
      </header>
      <section className="container">
        {currentTab === 'Projects' ? <RepoList /> : null}
        {currentTab === 'About Me' ? <AboutMe /> : null}
        {currentTab === 'Contact Me' ? <ContactMe /> : null}
        {/*currentTab === 'Resume' ? <Resume /> : null} */}
      </section>
      <footer>
        <h1>This is the footer</h1>
      </footer>
    </div>
  );
}

export default App;

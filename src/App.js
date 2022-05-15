import './App.css';
import { useState } from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import Homepage from './components/Homepage/homepage';

function App() {

  const [theme, setCurrentTheme] = useState(false);
  return (
    <div >
      <div className='App' data-theme={theme}>
        <Header
          setCurrentTheme={setCurrentTheme}
          theme={theme}
        />
        <Homepage theme={theme} />
        <Footer />
      </div>
    </div >
  );
}

export default App;
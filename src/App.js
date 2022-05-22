import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [navOptions] = useState([
    { name: 'About' },
    { name: 'Portfolio' },
    { name: 'Resume' }
  ]);

  const [currentNav, setCurrentNav] = useState(navOptions[0]);
  const [contactSelected, setContactSelected] = useState(false);
  console.log(currentNav);
  return (
    <div>
      <Header 
        navOptions={navOptions}
        currentNav={currentNav}
        setCurrentNav={setCurrentNav}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected && currentNav.name === 'About' && (
          <About />
        )}
        {!contactSelected && currentNav.name === 'Portfolio' && (
          <Portfolio />
        )}
        {!contactSelected && currentNav.name === 'Resume' && (
          <Resume />
        )}
        {contactSelected && (
          <Contact />
        )}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

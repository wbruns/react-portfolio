import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  const [navOptions] = useState([
    { name: 'Portfolio' },
    { name: 'Resume' }
  ]);

  const [currentNav, setCurrentNav] = useState(false);
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
        {!contactSelected && !currentNav && (
          <About />
        )}
        {!contactSelected && currentNav.name === 'Portfolio' && (
          <Portfolio />
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

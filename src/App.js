import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header 
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      />
      <main>
        {!contactSelected ? (
          <>
            <About />
          </>
        ) : (
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

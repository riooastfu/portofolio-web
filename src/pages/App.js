import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//================COMPONENTS IMPORT=================//
import About from '../components/about/about';
import Home from '../components/home/home';
import Portofolio from '../components/portofolio/portofolio';
import Resume from '../components/resume/resume';
import Sidebar from '../components/sidebar/sidebar';
import Contact from '../components/contact/contact';
import Services from '../components/services/services';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Portofolio />
        {/* <Services/> */}
        <Resume />
        
        <Contact />
      </main>
    </>
  );
}

export default App;

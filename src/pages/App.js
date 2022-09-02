import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//================COMPONENTS IMPORT=================//
import About from '../components/about/about';
import Home from '../components/home/home';
import Portofolio from '../components/portofolio/portofolio';
import Resume from '../components/resume/resume';
import Sidebar from '../components/sidebar/sidebar';
import Pricing from '../components/pricing/pricing';
import Testimonials from '../components/testimonials/testimonials';
import Contact from '../components/contact/contact';
import Blog from '../components/blog/blog';
import Services from '../components/services/services';

function App() {
  return (
    <>
      <Sidebar />
      <main className='main'>
        <Home />
        <About />
        <Services/>
        <Resume />
        <Portofolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;

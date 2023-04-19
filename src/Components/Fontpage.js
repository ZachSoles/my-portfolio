import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage/Homepage';
import About from './About/About';
import Experience from './Experience/Experience';
import exp from './Experience/Experience.json';
import edu from './Education.json';
import cert from './Certifications.json'
import Projects from './Projects/Projects';

function FrontPage() {
  return (
    <div>
        <Homepage/>
        <About/>
        <Projects/>
        {/* <Experience name={cert.name} Experience={cert.Certifications}/>
        <Experience name={exp.name} Experience={exp.Experience}/>
        <Experience name={edu.name} Experience={edu.Education}/> */}
    </div>
  );
}

export default FrontPage;
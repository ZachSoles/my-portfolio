import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import json from './Experience.json';
import '../Shared/Info.css'
import { Media } from 'react-bootstrap';

function Experience() {
  return (
    <div>
        <Media className="style">
        <Media.Body>
          <h5 className="title" >{json.name}:</h5>
          {
            json.Experience.map((exp) => (
              <div>
                <h6 className="name">{exp.name}</h6>
                <p>{exp.title}</p>
                <ul>
                  {
                    exp.bullet.map((b) => (
                      <li>{b}</li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </Media.Body>
      </Media>
    </div>
  );
}

export default Experience;
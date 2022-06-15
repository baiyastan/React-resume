import React, { Component } from "react";

const works = [
  { name: "ecmascript", level: "100%" },
  { name: "ReactJs", level: "100%" },
  { name: "NEXTJS", level: "100%" },
  { name: "Typescript", level: "100%" },
  { name: "REDUX", level: "100%" },
  { name: "MOBX", level: "100%" },
  { name: "CSS", level: "100%" },
  { name: "SASS", level: "100%" },
  { name: "TAILWINDCSS", level: "100%" },
  { name: "STYLED-COMPONENTS", level: "100%" },
  { name: "Bootstrap", level: "100%" },
  { name: "Git", level: "100%" },
];

class Resume extends Component {
  render() {
    if (works) {
      var skills = works.map(function (skills) {
        var className = "bar-expand " + skills.name.toLowerCase();
        return (
          <li key={skills.name}>
            <span style={{ width: skills.level }} className={className}></span>
            <em>{skills.name}</em>
          </li>
        );
      });
    }

    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {/* {education} */}
                <div>
                  <h3>Osh Tuu</h3>
                  <p className="info">
                    Medium. Economic. <span>&bull;</span>
                    <em className="date">2013-2015</em>
                  </p>
                  <p></p>
                </div>
                <div>
                  <h3>IT Park, Osh — Course</h3>
                  <p className="info">
                    Medium. Economic. <span>&bull;</span>
                    <em className="date">Sep 2019 - Mar 2020</em>
                  </p>
                  <p>Website development with JavaScript and React</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {/* {work} */}
            <div>
              <h3>Sigma Software Solutions</h3>
              <p className="info">
                Frontend developer
                <span>&bull;</span>{" "}
                <em className="date">Feb 2021 - May 2022</em>
              </p>
              <p></p>
            </div>
            <div>
              <h3>Novay Norma</h3>
              <p className="info">
                Frontend developer intern
                <span>&bull;</span>{" "}
                <em className="date">Nov 2020 - Feb 2021</em>
              </p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;

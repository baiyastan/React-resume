import React, { Component } from "react";
import sima from "../assets/sima.png";
import ibuk from "../assets/isbuk.png";
import resume from "../assets/resume.png";
import bejamas from "../assets/bejamas.png";
const datas = [
  {
    category: "simastore.ru",
    image: sima,
    title: "Simastore",
    url: "https://simastore.ru/",
  },
  {
    category: "isbuk.ru",
    image: ibuk,
    title: "Isbuk",
    url: "http://isbuk.ru/",
  },
  {
    category: "resume",
    image: resume,
    title: "Resuma",
    url: "https://react-resume-baiyastan95.vercel.app/",
  },
  {
    category: "Bejamas",
    image: bejamas,
    title: "Bejamas",
    url: "https://bejamas-psi.vercel.app/",
  },
];

class Portfolio extends Component {
  render() {
    console.log(datas);

    if (this.props.data) {
      var projects = datas.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projects.image} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

import React, { Component } from "react";
import pp from "../assets/pp.jpeg";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = "Baiastan Amataliev";
      var profilepic = pp;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Tim Baker Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              {" "}
              I have been learning Front End development since the 2021 year, I
              have completed a IT-Park course in HTML, CSS, React and JS. Until
              this day I participated in several projects and got experience.
              After finishing some courses in IT-Park, I have also learned
              Next.js, Redux, React-Router, and Mobx, and I did some projects by
              this framework. I created quick and easy responsive web pages
              using these. I am passionate about my work. Because I love what I
              do, I have a constant source of motivation that motivates me to do
              what I can. This passion led me to test myself every day and learn
              new skills that will help me do a better job in my last job.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Baiastan Akmataliev</span>
                  <br />
                  <span>
                    Suiorkulov 4
                    <br />
                    Bishkek Kyrgyzstan
                  </span>
                  <br />
                  <span>+996 772 61 61 19</span>
                  <br />
                  <a href="mailto:bsbaha195@gmail.com">
                    <span>bsbaha195@gmail.com</span>
                  </a>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

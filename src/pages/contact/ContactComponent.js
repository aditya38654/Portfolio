import React, { Component } from "react";
import emailjs from "emailjs-com";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { contactPageData } from "../../portfolio.js";

const ContactData = contactPageData.contactSection;

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
      success: false,
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = this.state;

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          this.setState({
            success: true,
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          console.error(error);
          alert("Failed to send message ❌");
        }
      );
  };

  render() {
    const theme = this.props.theme;

    return (
      <div className="contact-main">
        <Header theme={theme} />

        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              {/* IMAGE */}
              <div className="contact-heading-img-div">
                <img
                  src={`/images/${ContactData.profile_image_path}`}
                  alt="contact"
                />
              </div>

              {/* TEXT */}
              <div className="contact-heading-text-div">
                <h1 style={{ color: theme.text }}>
                  Let’s Build Something Amazing Together 🚀
                </h1>

                <p style={{ color: theme.secondaryText }}>
                  I’m a Full-Stack Developer specializing in scalable backend
                  systems using Spring Boot and modern frontend applications
                  using React. I enjoy solving real-world problems and building
                  impactful digital solutions.
                  <br />
                  <br />
                  Whether you have a project idea, a collaboration opportunity,
                  or a full-time role — feel free to reach out.
                </p>

                {/* Availability */}
                <p className="availability-text">
                  🚀 Open to:
                  <br />
                  • Full-time roles <br />
                  • Internships <br />• Freelance projects
                </p>

                <SocialMedia theme={theme} />

                {/* 🔥 RESUME SECTION */}
                <p className="resume-text">
                  Want a detailed overview of my skills, projects, and
                  experience?
                </p>

                <div className="resume-section">
                  {/* MAIN */}
                  <div className="resume-btn-div">
                    <Button
                      text="Download Resume"
                      href="/docs/Aditya_Singh_Resume.pdf"
                      newTab={true}
                      theme={theme}
                    />
                  </div>

                  {/* SECONDARY */}
                  <p className="resume-subtext">Looking for a specific role?</p>

                  <div className="resume-links">
                    <a
                      href="/docs/Aditya_Singh_Backend_Developer.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Backend Resume (Java / Spring Boot)
                    </a>

                    <a
                      href="/docs/Aditya_Singh_Frontend_Developer.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Frontend Resume (React / Next.js)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>

          {/* FORM */}
          <Fade bottom duration={1000} distance="40px">
            <div className="premium-contact-container">
              <h1 style={{ color: theme.text }}>Let’s Connect 🚀</h1>

              <p className="subTitle">
                Have a project, idea, or opportunity? Let’s connect.
              </p>

              <form className="premium-form" onSubmit={this.handleSubmit}>
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>

                <div className="input-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    required
                    rows="4"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </div>

                <button type="submit" className="premium-btn">
                  ✈ Send Message
                </button>
              </form>

              {this.state.success && (
                <p className="success-msg">✅ Message sent successfully!</p>
              )}
            </div>
          </Fade>
        </div>

        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Contact;

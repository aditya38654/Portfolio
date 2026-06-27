import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import { projectsHeader, projects } from "../../portfolio";
import "./Projects.css";

class Projects extends Component {
  render() {
    const theme = this.props.theme;

    return (
      <div className="projects-main">
        <Header theme={theme} />

        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <img
                  src={`/images/${projectsHeader.avatar_image_path}`}
                  alt="Project"
                />
              </div>

              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>

                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader.description}
                </p>
              </div>
            </div>
          </Fade>
        </div>

        {/* Project Cards */}
        <div className="repo-cards-div-main">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              className="project-card"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2>{project.title}</h2>

              <h4>🚨 Problem</h4>
              <p>{project.problem}</p>

              <h4>🎯 Objective</h4>
              <p>{project.objective}</p>

              <h4>📈 Impact</h4>
              {project.impact && (
                <ul>
                  {project.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}

              {project.tech && (
                <div className="tech-stack">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;

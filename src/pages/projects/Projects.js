import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { motion } from "framer-motion";
import { greeting, projectsHeader, projects } from "../../portfolio";
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
                {/* <ProjectsImg theme={theme} /> */}
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

        {/* 🔥 PROJECT GRID */}
        <div className="repo-cards-div-main">
          {projects.map((project) => (
            <motion.div
              className="project-card"
              key={project.title}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2>{project.title}</h2>

              <h4>🚨 Problem</h4>
              <p>{project.problem}</p>

              <h4>🎯 Objective</h4>
              <p>{project.objective}</p>

              <h4>📈 Impact</h4>
              <ul>
                {project.impact?.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <div className="tech-stack">
                {project.tech?.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <Button
          text={"More Projects"}
          className="project-button"
          href={greeting.githubProfile}
          newTab={true}
          theme={theme}
        />

        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default Projects;

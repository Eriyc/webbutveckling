import React from "react";
import "./Card.css";
import { Project } from "../Projects";

import { Css, Html, Js } from "./svgs";
import Button from "./Button";

export default (project: Project) => {
  return (
    <div className="Card-root">
      <div id={project.id} className="will-grow"></div>
      <div className="Card-image-fix">
        <img src={project.image} alt="Project preview" className="Card-image" />
      </div>
      <div className="Card-content">
        <h3 className="Card-title">{project.title}</h3>
        <div style={{ flex: 1, marginTop: 8 }}>
          {project.tech.map((tech) => {
            if (tech === "javascript") return <Js height={35} width={35} />;
            else if (tech === "css") return <Css height={35} width={35} />;
            else if (tech === "html") return <Html height={35} width={35} />;
            else return undefined
          })}
        </div>
        <div className="Button-container">
          <Button type="github" href={project.github}>
            Github
          </Button>
          <Button type="link" href={project.link} parent={project.id}>
            Länk
          </Button>
        </div>
      </div>
    </div>
  );
};

import { nanoid } from "nanoid";

enum Technologies {
  javascript = "javascript",
  html = "html",
  css = "css",
}

export interface Project {
  title: string;
  image: string;
  tech: Technologies[];
  github: string;
  link: string;
  id: string;
}

const projects: Project[] = [
  {
    title: "Recept",
    image: process.env.PUBLIC_URL + "/img/test.png",
    tech: [Technologies.html, Technologies.javascript, Technologies.css],
    github: "https://github.com/Eriyc/webbutveckling/tree/master/lektion1",
    link: "https://web.dgren.dev/recipe",
    id: nanoid(4),
  },
];

export default projects;

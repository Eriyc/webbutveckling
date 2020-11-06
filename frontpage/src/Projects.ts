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
  vecka: number;
}

const projects: Project[] = [
  {
    title: "Recept",
    image: process.env.PUBLIC_URL + "/img/test.png",
    tech: [Technologies.html, Technologies.javascript, Technologies.css],
    github: "https://github.com/Eriyc/webbutveckling/tree/master/recipe",
    link: "https://web.dgren.dev/recipe",
    id: nanoid(4),
    vecka: 35,
  },
  {
	  title: "Spooky",
	  image: process.env.PUBLIC_URL + "img/spooky.png",
	  tech: [Technologies.html, Technologies.javascript, Technologies.css],
	  github: "https://github.com/Eriyc/webbutveckling/tree/master/spooky",
      link: "https://web.dgren.dev/spooky",
      id: nanoid(4),
      vecka: 45,
  }
];

export default projects;

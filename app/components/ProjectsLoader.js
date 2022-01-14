import { ajax } from "../helpers/ajax.js";

export async function ProjectsLoader() {
  const d = document,
    $projects = d.getElementById("projects"),
    $template = d.getElementById("project-template").content,
    $fragment = d.createDocumentFragment();

  await ajax({
    url: "./app/assets/user.json",
    cbSuccess: (api) => {
      const projects = api.projects;
      //console.log(projects);

      projects.forEach((project) => {
        //console.log(project.url);
        $template.querySelector("h4").innerHTML = project.title;
        $template.querySelector("p").innerHTML = project.content;
        $template.querySelector("a").href = project.url;

        project.tech.forEach((tech) => {
          //console.log(tech);
          const $img = d.createElement("img");

          $img.src = tech.src;
          $img.alt = tech.name;
          $template.querySelector(".used-tech").appendChild($img);
        });

        let $clone = d.importNode($template, true);
        $fragment.appendChild($clone);
        $template.querySelector(".used-tech").innerHTML = "";
      });

      $projects.innerHTML = "";

      document.querySelector(".loader").style.display = "none";
      $projects.appendChild($fragment);
    },
  });
}

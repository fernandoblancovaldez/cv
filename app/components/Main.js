import { Profile } from "./Profile.js";
import { Projects } from "./Projects.js";

export function Main() {
  const $main = document.createElement("main");

  $main.id = "main";
  $main.appendChild(Profile());
  $main.appendChild(Projects());
  return $main;
}

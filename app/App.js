import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Footer } from "./components/Footer.js";
import { ProjectsLoader } from "./components/ProjectsLoader.js";
import { Loader } from "./components/Loader.js";
import { ContactForm } from "./components/ContactForm.js";

export function App() {
  const $root = document.getElementById("root");

  $root.innerHTML = null;
  $root.appendChild(Header());
  $root.appendChild(Main());
  $root.appendChild(ContactForm());
  $root.appendChild(Footer());
  $root.appendChild(Loader());

  ProjectsLoader();
}

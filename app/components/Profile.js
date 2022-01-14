import { Contact } from "./Contact.js";
import { Introduction } from "./Introduction.js";

export function Profile() {
  const $profile = document.createElement("section");

  $profile.classList.add("profile");
  $profile.appendChild(Contact());
  $profile.appendChild(Introduction());

  return $profile;
}

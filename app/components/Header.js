import { ProfilePhoto } from "./ProfilePhoto.js";
import { Name } from "./Name.js";
import { JobTitleAlleged } from "./JobTitleAlleged.js";

export function Header() {
  const $header = document.createElement("header");

  $header.appendChild(ProfilePhoto());
  $header.appendChild(Name());
  $header.appendChild(JobTitleAlleged());

  return $header;
}

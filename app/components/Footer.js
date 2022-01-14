import { Lang } from "./Lang.js";
import { Schooling } from "./Schooling.js";

export function Footer() {
  const $footer = document.createElement("footer");

  $footer.appendChild(Lang());
  $footer.appendChild(Schooling());

  return $footer;
}

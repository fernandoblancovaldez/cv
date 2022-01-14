import { ajax } from "../helpers/ajax.js";

export function Name() {
  const $h1 = document.createElement("h1");

  ajax({
    url: "./app/assets/user.json",
    cbSuccess: (api) => {
      $h1.textContent = `${api.profile[0].name}`;
    },
  });

  return $h1;
}

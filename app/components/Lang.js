import { ajax } from "../helpers/ajax.js";

export function Lang() {
  const $lang = document.createElement("div");
  $lang.classList.add("lang");

  ajax({
    url: "./app/assets/user.json",
    cbSuccess: (api) => {
      //console.log(api);
      $lang.innerHTML = `
                      ${api.lang}
                      <hr>`;
    },
  });

  return $lang;
}

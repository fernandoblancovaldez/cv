import { ajax } from "../helpers/ajax.js";

export function JobTitleAlleged() {
  const $h2 = document.createElement("h2");

  ajax({
    url: "./app/assets/user.json",
    cbSuccess: (api) => {
      //console.log(api);
      $h2.textContent = `${api.profile[0]["job-title-alleged"]}`;
    },
  });

  return $h2;
}

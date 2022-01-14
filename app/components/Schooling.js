import { ajax } from "../helpers/ajax.js";

export function Schooling() {
  const $schooling = document.createElement("div");
  $schooling.classList.add("schooling");

  ajax({
    url: "./app/assets/user.json",
    cbSuccess: (api) => {
      //console.log(api);
      $schooling.innerHTML = `
                    ${api.schooling.title}
                    ${api.schooling.institute}                    
                    <hr>`;
    },
  });

  return $schooling;
}

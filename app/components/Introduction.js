import { ajax } from "../helpers/ajax.js";

export function Introduction() {
  const $introduction = document.createElement("div");
  $introduction.id = "introduction";

  ajax({
    url: "./app/assets/user.json",
    cbSuccess: (api) => {
      $introduction.innerHTML = api.profile[0].introduction;
    },
  });

  return $introduction;
}

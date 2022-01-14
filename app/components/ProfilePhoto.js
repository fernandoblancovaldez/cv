import { ajax } from "../helpers/ajax.js";

export function ProfilePhoto() {
  const $img = document.createElement("img");
  $img.classList.add("profile-photo");

  ajax({
    url: "./app/assets/user.json",
    cbSuccess: (api) => {
      //console.log(api);
      $img.src = api.profile[0].photo;
      $img.alt = api.profile[0].name;
    },
  });

  return $img;
}

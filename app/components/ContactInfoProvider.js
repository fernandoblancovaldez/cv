import { ajax } from "../helpers/ajax.js";

const d = document,
  w = window;

export default function ContactInfoProvider() {
  d.addEventListener("click", (e) => {
    if (e.target.matches(".email") || e.target.matches(".email *")) {
      d.querySelector(".contact-form").classList.toggle("is-active");
    }

    if (e.target.matches(".back-btn") || e.target.matches(".back-btn *")) {
      e.preventDefault();
      d.querySelector(".contact-form").classList.toggle("is-active");
    }

    if (e.target.matches(".address") || e.target.matches(".address *"))
      ajax({
        url: "./app/assets/user.json",
        cbSuccess: (api) => {
          d.getElementById(
            "introduction"
          ).innerHTML = ` <hr><p>${api.profile[0].address.zipcode}</br><b>${api.profile[0].address.province}</b></br><em>${api.profile[0].address.country}</em></p><hr>`;
        },
      });
  });
}

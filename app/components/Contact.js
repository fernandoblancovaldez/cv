import { ajax } from "../helpers/ajax.js";

export function Contact() {
  const $contact = document.createElement("ul");
  $contact.classList.add("contact");

  ajax({
    url: "./app/assets/user.json",
    cbSuccess: (api) => {
      //    console.log(api);
      $contact.innerHTML = `
                    <li class="phone"><a href="https://wa.me/5491124561194" target="_blank" rel="noopener noreferrer"><i class="${api.profile[0].phone.ico}"></i></a></li>
                    <li class="github"><a href="${api.profile[0].github.account}" target="_blank" rel="noopener noreferrer"><i class="${api.profile[0].github.ico}"></i></a></li>
                    <li class="linkedin"><a href="${api.profile[0].linkedin.account}" target="_blank" rel="noopener noreferrer"><i class="${api.profile[0].linkedin.ico}"></i></a></li>
                    <li class="email"><i class="${api.profile[0].email.ico}"></i></li>
                    <li class="address"><i class="${api.profile[0].address.ico}"></i></li>`;
    },
  });
  return $contact;
}

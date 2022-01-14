export function ContactForm() {
  const d = document,
    $form = d.createElement("form");

  $form.classList.add("contact-form");

  $form.innerHTML = `
    <legend>Enviame tus comentarios</legend>
        <input type="text" name="name" placeholder="Escribe tu nombre"
            title="Nombre solo acepta letras y espacios en blanco" pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\\s]+$" required>
        <input type="email" name="email" placeholder="Escribe tu email" title="Email incorrecto"
            pattern="^[a-z0-9]+(\\.[_a-z0-9]+)*@[a-z0-9-]+(\\.[a-z0-9-]+)*(\\.[a-z]{2,15})$" required>
        <input type="text" name="subject" placeholder="Asunto a tratar" title="El asunto es requerido" required>
        <textarea name="comments" cols="50" rows="5" placeholder="Escribe tus comentarios"
            title="Tu cometario no debe exceder los 255 caracteres" data-pattern="^.{1,255}$" required></textarea>
        <input type="submit" value="Enviar">
        <div class="back-btn"><i class="fas fa-arrow-left"></i></div>
        <div class="contact-form-loader none">
            <img src="app/assets/loader.svg" alt="Cargando ..">
        </div>
        <div class="contact-form-response none">
            <p>Los datos han sido enviados</p>
        </div>
    `;

  function validationsForm() {
    const $form = d.querySelector(".contact-form"),
      $inputs = d.querySelectorAll(".contact-form [required]");

    $inputs.forEach((input) => {
      const $span = d.createElement("span");
      $span.id = input.name;
      $span.textContent = input.title;
      $span.classList.add("contact-form-error", "none");
      input.insertAdjacentElement("afterend", $span);
    });

    d.addEventListener("keyup", (e) => {
      if (e.target.matches(".contact-form [required]")) {
        let $input = e.target,
          pattern = $input.pattern || $input.dataset.pattern;

        // console.log($input, pattern);
        if (pattern && $input.value !== "") {
          //console.log("el input tiene patron");
          let regex = new RegExp(pattern);
          return !regex.exec($input.value)
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }

        if (!pattern) {
          //console.log("el input NO tiene patron");
          return $input.value === ""
            ? d.getElementById($input.name).classList.add("is-active")
            : d.getElementById($input.name).classList.remove("is-active");
        }
      }
    });

    d.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Enviando Formulario");

      const $loader = d.querySelector(".contact-form-loader"),
        $response = d.querySelector(".contact-form-response");

      $loader.classList.remove("none");

      fetch("https://formsubmit.co/ajax/fernandoblancovaldez@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then((json) => {
          console.log(json);
          $loader.classList.add("none");
          $response.classList.remove("none");
          $response.innerHTML = `<p>${json.message}</p>`;
          $form.reset();
        })
        .catch((err) => {
          console.log(err);
          let message =
            err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
          $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
        })
        .finally(() => {
          setTimeout(() => {
            $response.classList.add("none");
            $response.innerHTML = "";
          }, 3000);
        });
    });
  }

  setTimeout(() => {
    validationsForm();
  }, 1);
  return $form;
}

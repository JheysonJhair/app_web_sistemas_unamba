document.addEventListener("DOMContentLoaded", function () {
  //---------------------------------------------------------------- GET MISION
  fetch("http://localhost:1337/api/Nosotros-misions")
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        const mision = data.data[0];

        document.getElementById("about_mision-descripcion").textContent =
          mision.descripcion;
      } else {
        console.warn("No se encontraron datos en la colección About_mision.");
      }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));

  //---------------------------------------------------------------- GET VISION
  fetch("http://localhost:1337/api/Nosotros-visions")
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        const vision = data.data[0];

        document.getElementById("about_vision-descripcion").textContent =
          vision.descripcion;
      } else {
        console.warn("No se encontraron datos en la colección About_vision.");
      }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));

  //---------------------------------------------------------------- GET ORGANIZACION
  fetch("http://localhost:1337/api/Nosotros-organizacions")
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        const organizacion = data.data[0];

        document.getElementById("about_organizacion_decano").textContent =
          organizacion.decano;
        document.getElementById("about_organizacion_maildecano").textContent =
          organizacion.decanoMail;
        document.getElementById("about_organizacion_director").textContent =
          organizacion.director;
        document.getElementById("about_organizacion_maildirector").textContent =
          organizacion.directorMail;
      } else {
        console.warn(
          "No se encontraron datos en la colección About_organizacion."
        );
      }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));

  //---------------------------------------------------------------- GET GRADOS Y TITULOS
  fetch("http://localhost:1337/api/Nosotros-grado-titulos")
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        const grado_titulo = data.data[0];

        document.getElementById("about_grado").textContent =
          grado_titulo.grado;
        document.getElementById("about_titulo").textContent =
          grado_titulo.titulo;
      } else {
        console.warn(
          "No se encontraron datos en la colección About_grados-titulos."
        );
      }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));

  //---------------------------------------------------------------- GET PERFIL INGRESANTES
  fetch("http://localhost:1337/api/Nosotros-perfils")
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        const perfil = data.data[0];

        const conocimientos = perfil.conocimientos;
        const habilidades = perfil.habilidades;
        const actitudes = perfil.actitudes;

        let conocimientosHTML = "";
        conocimientos.forEach((item) => {
          item.children.forEach((child) => {
            if (child.type === "text") {
              conocimientosHTML += `<li><i class="bi bi-circle-fill"></i> ${child.text}</li>`;
            }
          });
        });

        let habilidadesHTML = "";
        habilidades.forEach((item) => {
          item.children.forEach((child) => {
            if (child.type === "text") {
              habilidadesHTML += `<li><i class="bi bi-circle-fill"></i> ${child.text}</li>`;
            }
          });
        });

        let actitudesHTML = "";
        actitudes.forEach((item) => {
          item.children.forEach((child) => {
            if (child.type === "text") {
              actitudesHTML += `<li><i class="bi bi-circle-fill"></i> ${child.text}</li>`;
            }
          });
        });

        document.getElementById("conocimientos-list").innerHTML =
          conocimientosHTML;
        document.getElementById("habilidades-list").innerHTML = habilidadesHTML;
        document.getElementById("actitudes-list").innerHTML = actitudesHTML;
      } else {
        console.warn(
          "No se encontraron datos en la colección Nosotros-perfils."
        );
      }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));

  //---------------------------------------------------------------- GET PERFIL PROFESIONAL
  fetch("http://localhost:1337/api/Nosotros-perfil-profesionals")
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        const perfilProfesional = data.data[0];

        const perfilProfesionalData = perfilProfesional.perfilProfesional;

        let perfilProfesionalHTML = "";
        perfilProfesionalData.forEach((item) => {
          item.children.forEach((child) => {
            if (child.type === "text") {
              perfilProfesionalHTML += `<li><i class="bi bi-circle-fill"></i> ${child.text}</li>`;
            }
          });
        });

        document.getElementById("perfil-profesional-list").innerHTML =
          perfilProfesionalHTML;
      } else {
        console.warn(
          "No se encontraron datos en la colección Nosotros-perfil-profesionals."
        );
      }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));

  //---------------------------------------------------------------- GET CAMPO OCUPACIONAL
  fetch("http://localhost:1337/api/Nosotros-campo-ocupacionals")
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        const campoOcupacional = data.data[0].campoOcupacional;

        const listContainer = document.getElementById("campo-ocupacional-list");
        let listHTML = "<ul>";

        campoOcupacional.forEach((item) => {
          if (item.type === "paragraph") {
            item.children.forEach((child) => {
              if (child.type === "text") {
                listHTML += `<li><i class="bi bi-circle-fill"></i> ${child.text}</li>`;
              }
            });
          }
        });

        listHTML += "</ul>";
        listContainer.innerHTML = listHTML;
      } else {
        console.warn(
          "No se encontraron datos en la colección Nosotros-campo-ocupacionals."
        );
      }
    })
    .catch((error) => console.error("Error al obtener los datos:", error));
});

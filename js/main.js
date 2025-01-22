(function ($) {
  "use strict";

  // ---------------------------------------------------------------- NAVBAR
  $(document).ready(function () {
    function toggleNavbarMethod() {
      if ($(window).width() > 992) {
        $(".navbar .dropdown")
          .on("mouseover", function () {
            $(".dropdown-toggle", this).trigger("click");
          })
          .on("mouseout", function () {
            $(".dropdown-toggle", this).trigger("click").blur();
          });
      } else {
        $(".navbar .dropdown").off("mouseover").off("mouseout");
      }
    }
    toggleNavbarMethod();
    $(window).resize(toggleNavbarMethod);
  });

  // ---------------------------------------------------------------- BTN UP
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // ---------------------------------------------------------------- NAVBAR ENLACES ACTIVE
  document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".nav-link");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop - sectionHeight / 2 &&
        window.scrollY < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    links.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll('[id$="-tab"]');
    const tabContents = document.querySelectorAll(".tab-pane");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabContents.forEach((content) => {
          content.classList.remove("show", "active");
        });

        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        tab.classList.add("active");

        const targetId = tab.getAttribute("data-bs-target").substring(1);
        const targetContent = document.getElementById(targetId);
        targetContent.classList.add("show", "active");
      });
    });
  });

  window.onscroll = function () {
    stickyNavbar();
  };

  // ---------------------------------------------------------------- FIJAR NAVBAR SCROLL
  var navbar = document.getElementById("navbar");
  var sticky = navbar.offsetTop;

  function stickyNavbar() {
    if (window.pageYOffset > sticky) {
      if (!navbar.classList.contains("fixed")) {
        navbar.classList.add("fixed");
      }
    } else {
      if (navbar.classList.contains("fixed")) {
        navbar.classList.remove("fixed");
      }
    }
  }
  document.addEventListener("DOMContentLoaded", function () {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new bootstrap.Tooltip(tooltipTriggerEl);
    });
  });

  //---------------------------------------------------------------- MODALES


  //------------------------------------ DOCENTES

  showModalBtn2.addEventListener("click", function () {
    myModal2.show();
  });

  async function loadDocentes() {
    const tableBody = document.getElementById("docentes-list2");
    tableBody.innerHTML = "";

    try {
      const response = await fetch("http://localhost:1337/api/docentes");
      const data = await response.json();

      data.data.forEach((docente) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        const nameSpan = document.createElement("span");
        nameSpan.innerHTML = ` <i class="fas fa-user bg-primary" style="font-size: 10px; width: 25px; height: 25px; display: inline-flex; align-items: center; justify-content: center; color: white; border-radius: 50%;"></i> ${docente.nombre}`;
        nameCell.appendChild(nameSpan);
        row.appendChild(nameCell);

        const degreeCell = document.createElement("td");
        degreeCell.textContent = docente.gradoAcademico;
        row.appendChild(degreeCell);

        const categoryCell = document.createElement("td");
        categoryCell.textContent = docente.category;
        row.appendChild(categoryCell);

        const emailCell = document.createElement("td");
        const emailIcon = document.createElement("a");
        emailIcon.href = `mailto:${docente.correo}`;
        emailIcon.innerHTML = `<i class="fas fa-envelope"></i>`;
        emailCell.appendChild(emailIcon);
        row.appendChild(emailCell);

        const cvCell = document.createElement("td");
        const cvLink = document.createElement("a");
        cvLink.href = docente.cv;
        cvLink.target = "_blank";
        cvLink.innerHTML = `<i class="fas fa-file-alt"></i>`;
        cvCell.appendChild(cvLink);
        row.appendChild(cvCell);

        tableBody.appendChild(row);
      });
    } catch (error) {
      console.error("Error loading docentes:", error);
    }
  }

  document.getElementById("showModalBtn2").addEventListener("click", () => {
    const modalElement = document.getElementById("myModal2");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    loadDocentes();
  });

  //------------------------------------- PDF

  showModalBtn.addEventListener("click", function () {
    myModal.show();
  });

  async function loadDocumentos() {
    const tableBody = document.getElementById("document-list");
    tableBody.innerHTML = "";

    try {
        const response = await fetch("http://localhost:1337/api/documentos");
        const data = await response.json();

        data.data.forEach((documento) => {
            const row = document.createElement("tr");

            const nameCell = document.createElement("td");
            const nameLink = document.createElement("a");
            nameLink.href = documento.urlPdf;
            nameLink.target = "_blank";
            nameLink.textContent = documento.titulo;
            nameCell.appendChild(nameLink);
            row.appendChild(nameCell);

            const dateCell = document.createElement("td");
            dateCell.textContent = documento.fechaPublicacion;
            row.appendChild(dateCell);

            tableBody.appendChild(row);

            row.addEventListener("mouseenter", () => {
                row.style.backgroundColor = "#edcb65";
            });

            row.addEventListener("mouseleave", () => {
                row.style.backgroundColor = "";
            });
        });
    } catch (error) {
        console.error("Error loading documentos:", error);
    }
}


  document.getElementById("showModalBtn").addEventListener("click", () => {
    const modalElement = document.getElementById("myModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    loadDocumentos();
  });
  
})(jQuery);

//---------------------------------------------------------------- PLAN STUDY

document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".card[data-id]");
  const contentContainer = document.querySelector(".card.p-4.mt-3");

  function showContent(section) {
    cards.forEach((card) => {
      if (card.dataset.id === section) {
        card.classList.remove("bg-secondary", "text-dark");
        card.classList.add("bg-primary", "text-white");
      } else {
        card.classList.remove("bg-primary", "text-white");
        card.classList.add("bg-secondary", "text-dark");
      }
    });

    switch (section) {
      case "areas-curriculares":
        fetch("http://localhost:1337/api/plan-studio-area-curriculars")
          .then((response) => response.json())
          .then((data) => {
            const totalCursos = data.data.reduce(
              (acc, item) => acc + item.numero_cursos,
              0
            );
            const totalCreditos = data.data.reduce(
              (acc, item) => acc + item.numero_creditos,
              0
            );

            const tableRows = data.data
              .map((item) => {
                const porcentajeCursos = (
                  (item.numero_cursos / totalCursos) *
                  100
                ).toFixed(2);
                const porcentajeCreditos = (
                  (item.numero_creditos / totalCreditos) *
                  100
                ).toFixed(2);

                return `
              <tr class="bg-secondary">
                <td class="border border-gray-300 px-4 py-2 font-bold text-center">${item.asignatura}</td>
                <td class="border border-gray-300 px-4 py-2 text-center">${item.numero_cursos}</td>
                <td class="border border-gray-300 px-4 py-2 text-center">${item.numero_creditos}</td>
                <td class="border border-gray-300 px-4 py-2 text-center">${porcentajeCursos}%</td>
                <td class="border border-gray-300 px-4 py-2 text-center">${porcentajeCreditos}%</td>
              </tr>
            `;
              })
              .join("");

            const totalRow = `
            <tr class="bg-secondary">
              <td class="border border-gray-300 px-4 py-2 font-bold text-center">TOTAL</td>
              <td class="border border-gray-300 px-4 py-2 text-center">${totalCursos}</td>
              <td class="border border-gray-300 px-4 py-2 text-center">${totalCreditos}</td>
              <td class="border border-gray-300 px-4 py-2 text-center">100%</td> 
              <td class="border border-gray-300 px-4 py-2 text-center">100%</td> 
            </tr>
          `;

            contentContainer.innerHTML = `
            <div class="table-responsive">
              <table class="table table-bordered table-nowrap text-center">
                <thead>
                  <tr>
                    <th rowspan="2" class="bg-primary text-white border border-gray-300 px-4 py-2 text-center">ASIGNATURAS DE</th>
                    <th colspan="2" class="bg-primary text-white border border-gray-300 px-4 py-2 text-center">NÚMERO DE</th>
                    <th colspan="2" class="bg-primary text-white border border-gray-300 px-4 py-2 text-center">PORCENTAJE PARA</th>
                  </tr>
                  <tr>
                    <th class="bg-primary2 text-white border border-gray-300 px-4 py-2 text-center">CURSOS</th>
                    <th class="bg-primary2 text-white border border-gray-300 px-4 py-2 text-center">CRÉDITOS</th>
                    <th class="bg-primary2 text-white border border-gray-300 px-4 py-2 text-center">CURSOS</th>
                    <th class="bg-primary2 text-white border border-gray-300 px-4 py-2 text-center">CRÉDITOS</th>
                  </tr>
                </thead>
                <tbody>
                  ${tableRows}
                  ${totalRow}
                </tbody>
              </table>
            </div>
          `;
          })
          .catch((error) => {
            console.error("Error al obtener los datos:", error);
            contentContainer.innerHTML = `<p>Hubo un error al cargar los datos.</p>`;
          });
        break;
      case "malla-curricular":
        fetch("http://localhost:1337/api/plan-studio-malla-curriculars")
          .then((response) => response.json())
          .then((data) => {
            const imageUrl = data.data[0]?.urlImage;

            if (imageUrl) {
              contentContainer.innerHTML = `
                    <img src="${imageUrl}" alt="Malla Curricular" class="img-fluid">
                  `;
            } else {
              contentContainer.innerHTML = `
                    <p>No se encontró la imagen de la malla curricular.</p>
                  `;
            }
          })
          .catch((error) => {
            console.error("Error al obtener los datos:", error);
            contentContainer.innerHTML = `<p>Hubo un error al cargar los datos.</p>`;
          });
        break;

      case "plan-de-estudios":
        fetch(
          "http://localhost:1337/api/plan-studio-asignaturas?pagination[page]=1&pagination[pageSize]=100"
        )
          .then((response) => response.json())
          .then((data) => {
            const semestres = data.data.reduce((acc, item) => {
              if (!acc[item.NOMBRE_SEMESTRE]) {
                acc[item.NOMBRE_SEMESTRE] = [];
              }
              acc[item.NOMBRE_SEMESTRE].push(item);
              return acc;
            }, {});

            let allTables = "";

            Object.entries(semestres).forEach(([semestre, items]) => {
              const sortedItems = items.sort((a, b) =>
                a.codigo.localeCompare(b.codigo)
              );
              const totalT = sortedItems.reduce((acc, item) => acc + item.t, 0);
              const totalP = sortedItems.reduce((acc, item) => acc + item.p, 0);
              const totalH = sortedItems.reduce((acc, item) => acc + item.h, 0);
              const totalCR = sortedItems.reduce(
                (acc, item) => acc + item.cr,
                0
              );

              const tableRows = sortedItems
                .map((item) => {
                  return `
                  <tr class="bg-secondary">
                    <td class="border border-gray-300 px-4 py-2 font-bold text-center">${item.codigo}</td>
                    <td class="border border-gray-300 px-4 py-2 text-center">${item.asignatura}</td>
                    <td class="border border-gray-300 px-4 py-2 text-center">${item.categoria}</td>
                    <td class="border border-gray-300 px-4 py-2 text-center">${item.t}</td>
                    <td class="border border-gray-300 px-4 py-2 text-center">${item.p}</td>
                    <td class="border border-gray-300 px-4 py-2 text-center">${item.h}</td>
                    <td class="border border-gray-300 px-4 py-2 text-center">${item.cr}</td>
                    <td class="border border-gray-300 px-4 py-2 text-center">${item.requisitos}</td>
                  </tr>
                `;
                })
                .join("");

              const totalRow = `
              <tr class="bg-secondary">
                <td class="border border-gray-300 px-4 py-2 font-bold text-center">TOTAL</td>
                <td class="border border-gray-300 px-4 py-2 font-bold text-center"></td>
                <td class="border border-gray-300 px-4 py-2 font-bold text-center"></td>
                <td class="border border-gray-300 px-4 py-2 text-center">${totalT}</td>
                <td class="border border-gray-300 px-4 py-2 text-center">${totalP}</td>
                <td class="border border-gray-300 px-4 py-2 text-center">${totalH}</td>
                <td class="border border-gray-300 px-4 py-2 text-center">${totalCR}</td>
                <td class="border border-gray-300 px-4 py-2 text-center"></td>
              </tr>
            `;

              allTables += `
              <div class="table-responsive">
                <table class="table table-bordered table-nowrap text-center border-collapse border border-gray-300">
                  <thead class="bg-primary text-white">
                    <tr class="bg-gray-300">
                      <td colspan="8" class="bg-primary text-center text-white font-bold px-4 py-2">
                        ${semestre}
                      </td>
                    </tr>
                  </thead>
                  <thead class="bg-primary text-white">
                    <tr>
                      <th class="border border-gray-300 px-4 py-2">CÓDIGO</th>
                      <th class="border border-gray-300 px-4 py-2">ASIGNATURA</th>
                      <th class="border border-gray-300 px-4 py-2">CAT</th>
                      <th class="border border-gray-300 px-4 py-2">T</th>
                      <th class="border border-gray-300 px-4 py-2">P</th>
                      <th class="border border-gray-300 px-4 py-2">H</th>
                      <th class="border border-gray-300 px-4 py-2">CR</th>
                      <th class="border border-gray-300 px-4 py-2">REQUISITOS</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${tableRows}
                    ${totalRow}
                  </tbody>
                </table>
              </div>
            `;
            });

            contentContainer.innerHTML = allTables;
          })
          .catch((error) => {
            console.error("Error al obtener los datos:", error);
            contentContainer.innerHTML = `<p>Hubo un error al cargar los datos.</p>`;
          });

        break;
      case "resolucion":
        fetch("http://localhost:1337/api/plan-studios")
          .then((response) => response.json())
          .then((data) => {
            const pdfUrl = data.data[0].urlPdf;

            contentContainer.innerHTML = `
            <p>La resolución CU-536-2019-UNAMBA aprueba el plan de estudios y la malla curricular de la Escuela profesional de Ingeniería Informática y de Sistemas.</p>
            <a href="${pdfUrl}" target="_blank" class="btn btn-primary align-self-start">Abrir Resolución</a>
          `;
          })
          .catch((error) => {
            console.error("Error al consumir la API:", error);
            contentContainer.innerHTML =
              "<p>No se pudo cargar la resolución.</p>";
          });

        break;
      default:
        contentContainer.innerHTML = `<p>Seleccione una sección.</p>`;
    }
  }

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      showContent(card.dataset.id);
    });
  });

  showContent("areas-curriculares");
});

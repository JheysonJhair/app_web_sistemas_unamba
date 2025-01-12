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
  //DONWLOAD
  const showModalBtn = document.getElementById("showModalBtn");
  const myModal = new bootstrap.Modal(document.getElementById("myModal"));
  showModalBtn.addEventListener("click", function () {
    myModal.show();
  });

  const pdfFiles = [
    {
      name: "Currículo de estudios - 2014",
      size: 102400,
      path: "pdf/documento1.pdf",
    },
    {
      name: "Estadísticas 2018 al 2022",
      size: 204800,
      path: "pdf/documento1.pdf",
    },
    {
      name: "NUMERO DE INGRESANTES POR SEMESTRE",
      size: 512000,
      path: "pdf/documento1.pdf",
    },
    {
      name: "NUMERO DE INGRESANTES POR SEMESTRE",
      size: 256000,
      path: "pdf/documento1.pdf",
    },
    {
      name: "NUMERO DE INGRESANTES POR SEMESTRE",
      size: 153600,
      path: "pdf/documento1.pdf",
    },
    {
      name: "NUMERO DE INGRESANTES POR SEMESTRE",
      size: 1048576,
      path: "pdf/documento1.pdf",
    },
    {
      name: "NUMERO DE INGRESANTES POR SEMESTRE",
      size: 768000,
      path: "pdf/documento1.pdf",
    },
    {
      name: "NUMERO DE INGRESANTES POR SEMESTRE",
      size: 1280000,
      path: "pdf/documento1.pdf",
    },
    {
      name: "NUMERO DE INGRESANTES POR SEMESTRE",
      size: 640000,
      path: "pdf/documento1.pdf",
    },
    {
      name: "NUMERO DE INGRESANTES POR SEMESTRE",
      size: 512000,
      path: "pdf/documento1.pdf",
    },
  ];

  function loadPdfFiles() {
    const tableBody = document.getElementById("document-list");
    tableBody.innerHTML = "";

    pdfFiles.forEach((file) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      const nameLink = document.createElement("a");
      nameLink.href = file.path;
      nameLink.target = "_blank";
      nameLink.textContent = file.name;
      nameCell.appendChild(nameLink);
      row.appendChild(nameCell);

      const dateCell = document.createElement("td");
      const date = new Date();
      dateCell.textContent = date.toISOString().split("T")[0];
      row.appendChild(dateCell);

      const sizeCell = document.createElement("td");
      const sizeInMB = (file.size / (1024 * 1024)).toFixed(2);
      sizeCell.textContent = `${sizeInMB} MB`;
      row.appendChild(sizeCell);

      tableBody.appendChild(row);

      row.addEventListener("mouseenter", () => {
        row.style.backgroundColor = "#edcb65";
      });

      row.addEventListener("mouseleave", () => {
        row.style.backgroundColor = "";
      });
    });
  }

  document.getElementById("showModalBtn").addEventListener("click", () => {
    const modalElement = document.getElementById("myModal");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    loadPdfFiles();
  });

  //DOCENTES
  const showModalBtn2 = document.getElementById("showModalBtn2");
  const myModal2 = new bootstrap.Modal(document.getElementById("myModal2"));
  showModalBtn2.addEventListener("click", function () {
    myModal2.show();
  });

  const docentes = [
    {
      name: "Manuel Jesús Ibarra Cabrera",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. Pri-TC",
      email: "mibarra@unamba.edu.pe",
      cv: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=2511",
    },
    {
      name: "Ecler Mamani Vilca",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. Pri-TC",
      email: "emamani@unamba.edu.pe",
      cv: "https://servicio-renacyt.concytec.gob.pe/ficha-renacyt/?idInvestigador=4885",
    },
    {
      name: "Erech Ordoñez Ramos",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. Pri-TC",
      email: "eordonez@unamba.edu.pe",
    },
    {
      name: "José Luis Merma Aroni",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. Pri-TC",
      email: "jmerma@unamba.edu.pe",
    },
    {
      name: "Evelyn Naida Luque Ochoa",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "eluque@unamba.edu.pe",
    },
    {
      name: "Francisco Cari Incahuanco",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "fcari@unamba.edu.pe",
    },
    {
      name: "Marleny Peralta Ascues",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "mperalta@unamba.edu.pe",
      cv: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=96584",
    },
    {
      name: "Ebert Gomez Aiquipa",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "egomez@unamba.edu.pe",
    },
    {
      name: "Nora Gladys Echegaray Peña",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "nechegaray@unamba.edu.pe",
    },
    {
      name: "Maryluz Cuentas Toledo",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "mcuentas@unamba.edu.pe",
      cv: "https://servicio-renacyt.concytec.gob.pe/ficha-renacyt/?idInvestigador=13799",
    },
    {
      name: "Mario Aquino Cruz",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "maquino@unamba.edu.pe",
      cv: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=98716",
    },
    {
      name: "Hesmeralda Rojas Enriquez",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "hrojas@unamba.edu.pe",
      cv: "https://ctivitae.concytec.gob.pe/appDirectorioCTI/VerDatosInvestigador.do?id_investigador=36648",
    },
    {
      name: "Lintol Contreras Salas",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "lcontreras@unamba.edu.pe",
    },
    {
      name: "Ronald Alberto Renteria Ayquipa",
      degree: "Ingeniero Informático y Sistemas",
      category: "AuxTC",
      email: "rrenteria@unamba.edu.pe",
    },
    {
      name: "Rafael Ricardo Quispe Merma",
      degree: "Ingeniero Informático y Sistemas",
      category: "AuxTC",
      email: "rquispe@unamba.edu.pe",
    },
    {
      name: "Kevin Arnold Arias Figueroa",
      degree: "Ingeniero Informático y Sistemas",
      category: "AuxTC",
      email: "karias@unamba.edu.pe",
    },
    {
      name: "Yonatan Mamani Coaquira",
      degree: "Ingeniero Informático y Sistemas",
      category: "AuxTC",
      email: "ymamani@unamba.edu.pe",
    },
    {
      name: "Virgilio Martinez Duran",
      degree: "Ingeniero Informático y Sistemas",
      category: "AuxTP",
      email: "vmartinez@unamba.edu.pe",
    },
    {
      name: "Alejandrina Huaylla Quispe",
      degree: "Ingeniero Informático y Sistemas",
      category: "DCB1",
      email: "ahuaylla@unamba.edu.pe",
    },
    {
      name: "Luis Miguel Alfaro Chirinos",
      degree: "Ingeniero Informático y Sistemas",
      category: "DCB1",
      email: "lalfaro@unamba.edu.pe",
    },
    {
      name: "Elvio Tintaya Zegarra",
      degree: "Ingeniero Informático y Sistemas",
      category: "DCB1",
      email: "etintaya@unamba.edu.pe",
    },
    {
      name: "Betsabe Milagros Ccolqque Ruiz",
      degree: "Ingeniero Informático y Sistemas",
      category: "DCB1",
      email: "bccolqque@unamba.edu.pe",
    },
    {
      name: "Luz Liliana Criado Huaylla",
      degree: "Ingeniero Informático y Sistemas",
      category: "DCB1",
      email: "lcriado@unamba.edu.pe",
    },
    {
      name: "Yuliana Miriam Tomaylla Gutierrez",
      degree: "Ingeniero Informático y Sistemas",
      category: "DCB2",
      email: "ytomaylla@unamba.edu.pe",
    },
    {
      name: "Karina Gamarra Peralta",
      degree: "Ingeniero Informático y Sistemas",
      category: "DCB2",
      email: "kgamarra@unamba.edu.pe",
    },
    {
      name: "Moises Delfin Jove Yucra",
      degree: "Ingeniero Informático y Sistemas",
      category: "AuxTC",
      email: "mjove@unamba.edu.pe",
    },
    {
      name: "John Abraham Aguirre Carrasco",
      degree: "Ingeniero Informático y Sistemas",
      category: "AuxTC",
      email: "jaguirre@unamba.edu.pe",
    },
    {
      name: "Daryl Andres Huaman Lopez",
      degree: "Ingeniero Informático y Sistemas",
      category: "AuxTC",
      email: "dhuaman@unamba.edu.pe",
    },
    {
      name: "Kely Segundo Villa",
      degree: "Ingeniero Informático y Sistemas",
      category: "JP",
      email: "ksegundo@unamba.edu.pe",
    },
    {
      name: "Nancy Arone Huarcaya",
      degree: "Ingeniero Informático y Sistemas",
      category: "JP",
      email: "narone@unamba.edu.pe",
    },
    {
      name: "Cesar Isaac Diaz Navarro",
      degree: "Ingeniero Informático y Sistemas",
      category: "JP",
      email: "cdiaz@unamba.edu.pe",
    },
  ];

  function loadDocentes() {
    const tableBody = document.getElementById("docentes-list");
    tableBody.innerHTML = "";

    docentes.forEach((docente) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      const nameSpan = document.createElement("span");
      nameSpan.innerHTML = ` <i class="fas fa-user bg-primary" style="font-size: 10px; width: 25px; height: 25px; display: inline-flex; align-items: center; justify-content: center; color: white; border-radius: 50%;"></i> ${docente.name}`;
      nameCell.appendChild(nameSpan);
      row.appendChild(nameCell);

      const degreeCell = document.createElement("td");
      degreeCell.textContent = docente.degree;
      row.appendChild(degreeCell);

      const categoryCell = document.createElement("td");
      categoryCell.textContent = docente.category;
      row.appendChild(categoryCell);

      const emailCell = document.createElement("td");
      const emailIcon = document.createElement("a");
      emailIcon.href = `mailto:${docente.email}`;
      emailIcon.innerHTML = `<i class="fas fa-envelope"></i`;
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
  }

  document.getElementById("showModalBtn2").addEventListener("click", () => {
    const modalElement = document.getElementById("myModal2");
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
    loadDocentes();
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
        fetch("http://localhost:1337/api/plan-studio-asignaturas?pagination[page]=1&pagination[pageSize]=100")
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
        fetch('http://localhost:1337/api/plan-studios')  
        .then(response => response.json())  
        .then(data => {
          const pdfUrl = data.data[0].urlPdf;
      
          contentContainer.innerHTML = `
            <p>La resolución CU-536-2019-UNAMBA aprueba el plan de estudios y la malla curricular de la Escuela profesional de Ingeniería Informática y de Sistemas.</p>
            <a href="${pdfUrl}" target="_blank" class="btn btn-primary align-self-start">Abrir Resolución</a>
          `;
        })
        .catch(error => {
          console.error('Error al consumir la API:', error);
          contentContainer.innerHTML = '<p>No se pudo cargar la resolución.</p>';
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

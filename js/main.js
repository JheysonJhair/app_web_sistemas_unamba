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
    },
    {
      name: "Ecler Mamani Vilca",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. Pri-TC",
      email: "emamani@unamba.edu.pe",
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
    },
    {
      name: "Mario Aquino Cruz",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "maquino@unamba.edu.pe",
    },
    {
      name: "Hesmeralda Rojas Enriquez",
      degree: "Ingeniero Informático y Sistemas",
      category: "P. ASOC-TC",
      email: "hrojas@unamba.edu.pe",
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
          <tr class="bg-secondary">
            <td class="border border-gray-300 px-4 py-2 font-bold text-center">Estudios Generales</td>
            <td class="border border-gray-300 px-4 py-2 text-center">10</td>
            <td class="border border-gray-300 px-4 py-2 text-center">35</td>
            <td class="border border-gray-300 px-4 py-2 text-center">16.33%</td>
            <td class="border border-gray-300 px-4 py-2 text-center">15.98%</td>
          </tr>
          <tr class="bg-secondary">
            <td class="border border-gray-300 px-4 py-2 font-bold text-center">Estudios Específicos</td>
            <td class="border border-gray-300 px-4 py-2 text-center">35</td>
            <td class="border border-gray-300 px-4 py-2 text-center">124</td>
            <td class="border border-gray-300 px-4 py-2 text-center">56.45%</td>
            <td class="border border-gray-300 px-4 py-2 text-center">56.62%</td>
          </tr>
          <tr class="bg-secondary">
            <td class="border border-gray-300 px-4 py-2 font-bold text-center">Estudios de Especialidad</td>
            <td class="border border-gray-300 px-4 py-2 text-center">13</td>
            <td class="border border-gray-300 px-4 py-2 text-center">45</td>
            <td class="border border-gray-300 px-4 py-2 text-center">20.97%</td>
            <td class="border border-gray-300 px-4 py-2 text-center">20.55%</td>
          </tr>
          <tr class="bg-secondary">
            <td class="border border-gray-300 px-4 py-2 font-bold text-center">Actividades Extra Curriculares</td>
            <td class="border border-gray-300 px-4 py-2 text-center">3</td>
            <td class="border border-gray-300 px-4 py-2 text-center">6</td>
            <td class="border border-gray-300 px-4 py-2 text-center">4.84%</td>
            <td class="border border-gray-300 px-4 py-2 text-center">2.74%</td>
          </tr>
          <tr class="bg-secondary">
            <td class="border border-gray-300 px-4 py-2 font-bold text-center">Prácticas pre profesionales</td>
            <td class="border border-gray-300 px-4 py-2 text-center">1</td>
            <td class="border border-gray-300 px-4 py-2 text-center">9</td>
            <td class="border border-gray-300 px-4 py-2 text-center">1.61%</td>
            <td class="border border-gray-300 px-4 py-2 text-center">4.11%</td>
          </tr>
          <tr class="bg-secondary">
            <td class="border border-gray-300 px-4 py-2 font-bold text-center">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2 text-center">62</td>
            <td class="border border-gray-300 px-4 py-2 text-center">219</td>
            <td class="border border-gray-300 px-4 py-2 text-center">100.00%</td>
            <td class="border border-gray-300 px-4 py-2 text-center">100.00%</td>
          </tr>
        </tbody>
        </table>
      </div>
        `;
        break;
      case "malla-curricular":
        contentContainer.innerHTML = `
          <img src="./img/UNAMBA/MALLA-CURRICULAR-SISTEMAS.png" alt="Malla Curricular" class="img-fluid">
        `;
        break;
      case "plan-de-estudios":
        contentContainer.innerHTML = `
      <div class="table-responsive">
        <table class="table table-bordered table-nowrap text-center border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              PRIMER SEMESTRE
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS101</td>
            <td class="border border-gray-300 px-4 py-2">
              Introducción a la Informática y Sistemas
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS102</td>
            <td class="border border-gray-300 px-4 py-2">Matemáticas Discretas I</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS103</td>
            <td class="border border-gray-300 px-4 py-2">Matemáticas Básicas</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS104</td>
            <td class="border border-gray-300 px-4 py-2">
              Redacción y Argumentación
            </td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS105</td>
            <td class="border border-gray-300 px-4 py-2">
              Geografía y Recursos Naturales
            </td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS106</td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">16</td>
            <td class="border border-gray-300 px-4 py-2">12</td>
            <td class="border border-gray-300 px-4 py-2">28</td>
            <td class="border border-gray-300 px-4 py-2">22</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              SEGUNDO SEMESTRE
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS201</td>
            <td class="border border-gray-300 px-4 py-2">Algorítmica I</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">7</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">IS101</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS202</td>
            <td class="border border-gray-300 px-4 py-2">Matemáticas Discretas II</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS102</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS203</td>
            <td class="border border-gray-300 px-4 py-2">Geometría Analítica</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS103</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS204</td>
            <td class="border border-gray-300 px-4 py-2">Ecología</td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS205</td>
            <td class="border border-gray-300 px-4 py-2">Realidad Nacional</td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS206</td>
            <td class="border border-gray-300 px-4 py-2">Psicología</td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">15</td>
            <td class="border border-gray-300 px-4 py-2">14</td>
            <td class="border border-gray-300 px-4 py-2">29</td>
            <td class="border border-gray-300 px-4 py-2">22</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              TERCER SEMESTRE
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS301</td>
            <td class="border border-gray-300 px-4 py-2">Algorítmica II</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">7</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">IS201</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS302</td>
            <td class="border border-gray-300 px-4 py-2">Sistemas Operativos</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS303</td>
            <td class="border border-gray-300 px-4 py-2">Cálculo I</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS203</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS304</td>
            <td class="border border-gray-300 px-4 py-2">Filosofía</td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS305</td>
            <td class="border border-gray-300 px-4 py-2">Economía</td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS306</td>
            <td class="border border-gray-300 px-4 py-2">
              Historia del Perú y del Mundo
            </td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">15</td>
            <td class="border border-gray-300 px-4 py-2">14</td>
            <td class="border border-gray-300 px-4 py-2">29</td>
            <td class="border border-gray-300 px-4 py-2">22</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              CUARTO SEMESTRE
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS401</td>
            <td class="border border-gray-300 px-4 py-2">Algorítmica III</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">6</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS301</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS402</td>
            <td class="border border-gray-300 px-4 py-2">
              Sistema de Gestión de Base de Datos I
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS403</td>
            <td class="border border-gray-300 px-4 py-2">Física I</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS404</td>
            <td class="border border-gray-300 px-4 py-2">
              Lenguajes Formales y Compiladores
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS405</td>
            <td class="border border-gray-300 px-4 py-2">Cálculo II</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS303</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS406</td>
            <td class="border border-gray-300 px-4 py-2">Relaciones Públicas</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">15</td>
            <td class="border border-gray-300 px-4 py-2">14</td>
            <td class="border border-gray-300 px-4 py-2">29</td>
            <td class="border border-gray-300 px-4 py-2">22</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              QUINTO SEMESTRE
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS501</td>
            <td class="border border-gray-300 px-4 py-2">Taller de Programación I</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">0</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">IS401</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS502</td>
            <td class="border border-gray-300 px-4 py-2">
              Sistema de Gestión de Base de Datos II
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS402</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS503</td>
            <td class="border border-gray-300 px-4 py-2">
              Análisis y Diseño de Sistemas de Información I
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS504</td>
            <td class="border border-gray-300 px-4 py-2">Administración Moderna</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS505</td>
            <td class="border border-gray-300 px-4 py-2">Física II</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS403</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS506</td>
            <td class="border border-gray-300 px-4 py-2">Ecuaciones Diferenciales</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS405</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">15</td>
            <td class="border border-gray-300 px-4 py-2">14</td>
            <td class="border border-gray-300 px-4 py-2">29</td>
            <td class="border border-gray-300 px-4 py-2">22</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              SEXTO SEMESTRE
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS601</td>
            <td class="border border-gray-300 px-4 py-2">
              Taller de Programación II
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">0</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">IS501</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS602</td>
            <td class="border border-gray-300 px-4 py-2">
              Análisis y Diseño de Sistemas de Información II
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS503</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS603</td>
            <td class="border border-gray-300 px-4 py-2">
              Circuitos Eléctricos y Electrónicos
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS505</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS604</td>
            <td class="border border-gray-300 px-4 py-2">Métodos Numéricos</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS605</td>
            <td class="border border-gray-300 px-4 py-2">Investigación Operativa</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">6</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS606</td>
            <td class="border border-gray-300 px-4 py-2">
              Formulación y Evaluación de Proyectos Informáticos
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">14</td>
            <td class="border border-gray-300 px-4 py-2">16</td>
            <td class="border border-gray-300 px-4 py-2">30</td>
            <td class="border border-gray-300 px-4 py-2">22</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              SÉPTIMO SEMESTRE
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS701</td>
            <td class="border border-gray-300 px-4 py-2">
              Taller de Programación III
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">0</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">IS601</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS702</td>
            <td class="border border-gray-300 px-4 py-2">Ingeniería de Software I</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">6</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">IS602</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS703</td>
            <td class="border border-gray-300 px-4 py-2">Sistemas Digitales</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS603</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS704</td>
            <td class="border border-gray-300 px-4 py-2">
              Arquitectura del Computador
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS705</td>
            <td class="border border-gray-300 px-4 py-2">Estadística Descriptiva</td>
            <td class="border border-gray-300 px-4 py-2">AFG</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">6</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS706</td>
            <td class="border border-gray-300 px-4 py-2">Planeamiento Estratégico</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">14</td>
            <td class="border border-gray-300 px-4 py-2">16</td>
            <td class="border border-gray-300 px-4 py-2">30</td>
            <td class="border border-gray-300 px-4 py-2">22</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              OCTAVO SEMESTRE
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS801</td>
            <td class="border border-gray-300 px-4 py-2">
              Desarrollo de Sistemas Orientado a Internet
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">0</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">IS701</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS802</td>
            <td class="border border-gray-300 px-4 py-2">
              Ingeniería de Software II
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">6</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS702</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS803</td>
            <td class="border border-gray-300 px-4 py-2">Redes de Computadoras</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS804</td>
            <td class="border border-gray-300 px-4 py-2">Estadística Inferencial</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">6</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS705</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS805</td>
            <td class="border border-gray-300 px-4 py-2">Marketing</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS806</td>
            <td class="border border-gray-300 px-4 py-2">Actividades</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">1</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">140 Cred</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Electivo</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">AFPE</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">12</td>
            <td class="border border-gray-300 px-4 py-2">20</td>
            <td class="border border-gray-300 px-4 py-2">32</td>
            <td class="border border-gray-300 px-4 py-2">22</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              NOVENO SEMESTRE
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS901</td>
            <td class="border border-gray-300 px-4 py-2">Comercio Electrónico</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS801</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS902</td>
            <td class="border border-gray-300 px-4 py-2">Inteligencia Artificial</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS903</td>
            <td class="border border-gray-300 px-4 py-2">Telecomunicaciones</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS803</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS904</td>
            <td class="border border-gray-300 px-4 py-2">
              Metodología de la Investigación
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS905</td>
            <td class="border border-gray-300 px-4 py-2">
              Sistemas de Información Gerencial
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Electivo</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">AFPE</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">15</td>
            <td class="border border-gray-300 px-4 py-2">14</td>
            <td class="border border-gray-300 px-4 py-2">29</td>
            <td class="border border-gray-300 px-4 py-2">22</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>
      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              DÉCIMO SEMESTRE
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS1001</td>
            <td class="border border-gray-300 px-4 py-2">
              Seguridad Protección y Auditoria Informática
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS1002</td>
            <td class="border border-gray-300 px-4 py-2">
              Administración de Tecnologías de la Información
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">6</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS1003</td>
            <td class="border border-gray-300 px-4 py-2">Sistemas Distribuidos</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">IS1004</td>
            <td class="border border-gray-300 px-4 py-2">Seminario de Tesis</td>
            <td class="border border-gray-300 px-4 py-2">AFPO</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">5</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">IS904</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">Electivo</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">AFPE</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">TOTAL</td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2"></td>
            <td class="border border-gray-300 px-4 py-2">12</td>
            <td class="border border-gray-300 px-4 py-2">12</td>
            <td class="border border-gray-300 px-4 py-2">24</td>
            <td class="border border-gray-300 px-4 py-2">18</td>
            <td class="border border-gray-300 px-4 py-2">-</td>
          </tr>
        </tbody>
      </table>

      <table class="table-auto w-full border-collapse border border-gray-300">
        <thead class="bg-primary text-white">
          <tr class="bg-gray-300">
            <td
              colspan="8"
              class="bg-primary text-center text-white font-bold px-4 py-2"
            >
              CURSOS ELECTIVOS
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
          <tr>
            <td class="border border-gray-300 px-4 py-2">ISE01</td>
            <td class="border border-gray-300 px-4 py-2">Computación Gráfica</td>
            <td class="border border-gray-300 px-4 py-2">AFPE</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">Ninguno</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">ISE02</td>
            <td class="border border-gray-300 px-4 py-2">Sistemas Distribuidos</td>
            <td class="border border-gray-300 px-4 py-2">AFPE</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">Ninguno</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">ISE03</td>
            <td class="border border-gray-300 px-4 py-2">Robótica</td>
            <td class="border border-gray-300 px-4 py-2">AFPE</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">Ninguno</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">ISE04</td>
            <td class="border border-gray-300 px-4 py-2">
              Programación Concurrente y Distribuida
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPE</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">Ninguno</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">ISE05</td>
            <td class="border border-gray-300 px-4 py-2">Telecomunicaciones II</td>
            <td class="border border-gray-300 px-4 py-2">AFPE</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">Ninguno</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-4 py-2">ISE06</td>
            <td class="border border-gray-300 px-4 py-2">
              Ensamblaje y Mantenimiento de Computadoras
            </td>
            <td class="border border-gray-300 px-4 py-2">AFPE</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">2</td>
            <td class="border border-gray-300 px-4 py-2">4</td>
            <td class="border border-gray-300 px-4 py-2">3</td>
            <td class="border border-gray-300 px-4 py-2">Ninguno</td>
          </tr>
        </tbody>
      </table>
    </div>

        `;
        break;
      case "resolucion":
        contentContainer.innerHTML = `
        <p>La resolución CU-536-2019-UNAMBA aprueba el plan de estudios y la malla curricular de la Escuela profesional de Ingenierí­a Informática y de Sistemas.</p>
        <a href="pdf/UNAMBA/RESOLUCION-SISTEMAS.pdf"target="_blank" class="btn btn-primary align-self-start">Abrir Resolución</a>
        `;
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

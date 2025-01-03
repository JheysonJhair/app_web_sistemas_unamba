(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    





  // Función para cambiar la clase active al hacer scroll
  document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.nav-link');
    
    let currentSection = '';

    // Verifica cuál sección está en la parte superior de la pantalla
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - sectionHeight / 2 && window.scrollY < sectionTop + sectionHeight) {
        currentSection = section.getAttribute('id');
      }
    });

    // Remueve la clase 'active' de todos los enlaces
    links.forEach(link => {
      link.classList.remove('active');
      
      // Añade la clase 'active' al enlace correspondiente
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });




    document.addEventListener("DOMContentLoaded", () => {
        // Agregar eventos de clic para cada pestaña
        const tabs = document.querySelectorAll('[id$="-tab"]'); // Seleccionamos todos los botones de las pestañas
        const tabContents = document.querySelectorAll('.tab-pane'); // Seleccionamos los contenidos de cada pestaña
      
        tabs.forEach(tab => {
          tab.addEventListener('click', () => {
            // Remover la clase 'show' de todos los contenidos
            tabContents.forEach(content => {
              content.classList.remove('show', 'active');
            });
      
            // Remover la clase 'active' de todos los botones
            tabs.forEach(tab => {
              tab.classList.remove('active');
            });
      
            // Agregar la clase 'active' al botón clickeado
            tab.classList.add('active');
            
            // Mostrar el contenido asociado al botón
            const targetId = tab.getAttribute('data-bs-target').substring(1); // Obtener el ID de la pestaña
            const targetContent = document.getElementById(targetId);
            targetContent.classList.add('show', 'active');
          });
        });
      });
      
      window.onscroll = function() {stickyNavbar()};

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
      document.addEventListener('DOMContentLoaded', function () {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.forEach(function (tooltipTriggerEl) {
          new bootstrap.Tooltip(tooltipTriggerEl);
        });
      });







      const showModalBtn = document.getElementById('showModalBtn');
      const myModal = new bootstrap.Modal(document.getElementById('myModal'));
  
      // Mostrar el modal cuando se hace clic en el botón
      showModalBtn.addEventListener('click', function() {
        myModal.show();
      });

      ///pdf
 // Lista de archivos PDF con nombre y tamaño (en bytes)
 const pdfFiles = [
  { name: 'Currículo de estudios - 2014', size: 102400, path: 'pdf/docuemnto1.pdf' },
  { name: 'Estadísticas 2018 al 2022', size: 204800, path: 'pdf/docuemnto1.pdf' },
  { name: 'NUMERO DE INGRESANTES POR SEMESTRE', size: 512000, path: 'pdf/docuemnto1.pdf' },
  { name: 'NUMERO DE INGRESANTES POR SEMESTRE', size: 256000, path: 'pdf/docuemnto1.pdf' },
  { name: 'NUMERO DE INGRESANTES POR SEMESTRE', size: 153600, path: 'pdf/docuemnto1.pdf' },
  { name: 'NUMERO DE INGRESANTES POR SEMESTRE', size: 1048576, path: 'pdf/docuemnto1.pdf' },
  { name: 'NUMERO DE INGRESANTES POR SEMESTRE', size: 768000, path: 'pdf/docuemnto1.pdf' },
  { name: 'NUMERO DE INGRESANTES POR SEMESTRE', size: 1280000, path: 'pdf/docuemnto1.pdf' },
  { name: 'NUMERO DE INGRESANTES POR SEMESTRE', size: 640000, path: 'pdf/docuemnto1.pdf' },
  { name: 'NUMERO DE INGRESANTES POR SEMESTRE', size: 512000, path: 'pdf/docuemnto1.pdf' }
];

// Función para cargar los archivos en la tabla del modal
function loadPdfFiles() {
  const tableBody = document.getElementById('document-list');
  tableBody.innerHTML = ''; // Limpiar tabla antes de llenarla

  pdfFiles.forEach(file => {
    const row = document.createElement('tr');

    // Descripción (nombre del archivo)
    const nameCell = document.createElement('td');
    const nameLink = document.createElement('a');
    nameLink.href = file.path;
    nameLink.target = '_blank';
    nameLink.textContent = file.name;
    nameCell.appendChild(nameLink);
    row.appendChild(nameCell);

    // Fecha de publicación (fecha actual por ejemplo)
    const dateCell = document.createElement('td');
    const date = new Date();
    dateCell.textContent = date.toISOString().split('T')[0];
    row.appendChild(dateCell);

    // Tamaño del archivo (en MB)
    const sizeCell = document.createElement('td');
    const sizeInMB = (file.size / (1024 * 1024)).toFixed(2); // Convertir a MB
    sizeCell.textContent = `${sizeInMB} MB`;
    row.appendChild(sizeCell);

    // Agregar fila a la tabla
    tableBody.appendChild(row);

    // Agregar efecto de hover
    row.addEventListener('mouseenter', () => {
      row.style.backgroundColor = '#edcb65';
    });

    row.addEventListener('mouseleave', () => {
      row.style.backgroundColor = '';
    });
  });
}

// Llamar a la función para cargar los archivos cuando se abre el modal
document.getElementById('showModalBtn').addEventListener('click', () => {
  const modalElement = document.getElementById('myModal');
  const modal = new bootstrap.Modal(modalElement);
  modal.show();
  loadPdfFiles(); // Cargar los archivos PDF cuando se abre el modal
});
})(jQuery);


document.addEventListener("DOMContentLoaded", function () {
    //---------------------------------------------------------------- GET DOCENTES
    fetch("http://localhost:1337/api/docentes")
      .then(response => response.json())
      .then(data => {
        const docentes = data.data.slice(0, 3); 
        const docentes2 = data.data.slice(3, 7); 

        let docentesHTML = ''; 
        let docentesHTML2 = ''; 
    
        docentes.forEach(docente => {
          docentesHTML += `
            <div class="col-md-6 col-lg-3 text-center team mb-4">
              <div class="team-item rounded overflow-hidden mb-2">
                <div class="team-img position-relative">
                  <img class="img-fluid" src="${docente.imagen}" alt="${docente.nombre}" />
                  <div class="team-social">
                    <a class="btn btn-outline-light btn-square mx-1 text-white" href="mailto:${docente.correo}" title="Correo electrónico">
                      <i class="fas fa-envelope"></i>
                    </a>
                    <a class="btn btn-outline-light btn-square mx-1 text-white" href="${docente.cv}" title="Hoja de vida" target="_blank">
                      <i class="fas fa-file-alt"></i>
                    </a>
                    <h5 class="text-center text-white mt-3 position-absolute pl-3 pr-3" style="bottom: 40px; font-size: 15px">
                      ${docente.gradoAcademico}
                    </h5>
                  </div>
                </div>
                <div class="bg-dark p-3">
                  <h5 class="text-white" style="font-size: 0.9rem">
                    ${docente.nombre}
                  </h5>
                </div>
              </div>
            </div>
            
          `;
        });
    
        docentes2.forEach(docente => {
            docentesHTML2 += `
              <div class="col-md-6 col-lg-3 text-center team mb-4">
                <div class="team-item rounded overflow-hidden mb-2">
                  <div class="team-img position-relative">
                    <img class="img-fluid" src="${docente.imagen}" alt="${docente.nombre}" />
                    <div class="team-social">
                      <a class="btn btn-outline-light btn-square mx-1 text-white" href="mailto:${docente.correo}" title="Correo electrónico">
                        <i class="fas fa-envelope"></i>
                      </a>
                      <a class="btn btn-outline-light btn-square mx-1 text-white" href="${docente.cv}" title="Hoja de vida" target="_blank">
                        <i class="fas fa-file-alt"></i>
                      </a>
                      <h5 class="text-center text-white mt-3 position-absolute pl-3 pr-3" style="bottom: 40px; font-size: 15px">
                        ${docente.gradoAcademico}
                      </h5>
                    </div>
                  </div>
                  <div class="bg-dark p-3">
                    <h5 class="text-white" style="font-size: 0.9rem">
                      ${docente.nombre}
                    </h5>
                  </div>
                </div>
              </div>
            `;
          });

        document.getElementById('docentes-list').innerHTML = docentesHTML;
        document.getElementById('docentes-list2').innerHTML = docentesHTML2;
      })
      .catch(error => console.error('Error al obtener los datos:', error));
    
    

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
  
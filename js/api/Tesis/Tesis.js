  //---------------------------------------------------------------- GET TESIS 06
document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:1337/api/documentos")
    .then((response) => response.json())
    .then((data) => {
      const tesis = data.data.slice(0, 3);
      const tesis2 = data.data.slice(3, 6);

      let tesisHTML = "";
      let tesisHTML2 = "";

      tesis.forEach((tesis) => {
        tesisHTML += `
           <div class="col-md-6 col-lg-4 mb-4">
              <div class="card border-0 shadow-sm h-100">
                <a
                  href="${tesis.urlPdf}"
                  download="tesis.pdf"
                  class="text-decoration-none card border-0 shadow-sm h-100 hover-effect"
                >
                  <div class="d-flex align-items-start p-2">
                    <img
                      src="img/pdf.png"
                      alt="Icono"
                      class="me-3"
                      style="width: 55px; height: 55px; margin-right: 10px;"
                    />
                    <div>
                      <h6 class="mb-2">${tesis.titulo}</h6>
                      <small class="text-muted">Fecha de publicación: ${tesis.fechaPublicacion}</small>
                    </div>
                  </div>
                </a>             
              </div>
            </div>
        `;
      });

      tesis2.forEach((tesis) => {
        tesisHTML2 += `
           <div class="col-md-6 col-lg-4 mb-4">
              <div class="card border-0 shadow-sm h-100">
                <a
                  href="${tesis.urlPdf}"
                  download="tesis.pdf"
                  class="text-decoration-none card border-0 shadow-sm h-100 hover-effect"
                >
                  <div class="d-flex align-items-start p-2">
                    <img
                      src="img/pdf.png"
                      alt="Icono"
                      class="me-3"
                      style="width: 55px; height: 55px; margin-right: 10px;"
                    />
                    <div>
                      <h6 class="mb-2">${tesis.titulo}</h6>
                      <small class="text-muted">Fecha de publicación: ${tesis.fechaPublicacion}</small>
                    </div>
                  </div>
                </a>             
              </div>
            </div>
          `;
      });

      document.getElementById("tesis-list2").innerHTML = tesisHTML;
      document.getElementById("tesis-list3").innerHTML = tesisHTML2;
    })
    .catch((error) => console.error("Error al obtener los datos:", error));
});

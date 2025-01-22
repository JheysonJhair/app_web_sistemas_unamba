//---------------------------------------------------------------- GET NOTICIAS PRINCIPAL
async function loadCarousel() {
  const carouselInner = document.getElementById("carouselInner");
  carouselInner.innerHTML = "";

  try {
    const response = await fetch(
      "http://localhost:1337/api/noticias-principals"
    );
    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      data.data.forEach((noticia, index) => {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        if (index === 0) {
          carouselItem.classList.add("active");
        }

        const blogItem = document.createElement("div");
        blogItem.classList.add(
          "blog-item",
          "position-relative",
          "overflow-hidden",
          "rounded",
          "mb-2"
        );
        blogItem.style.height = "100%";

        const imageContainer = document.createElement("div");
        imageContainer.style.width = "100%";
        imageContainer.style.height = "100%";
        imageContainer.style.display = "flex";
        imageContainer.style.justifyContent = "center";
        imageContainer.style.alignItems = "center";
        imageContainer.style.overflow = "hidden";

        const img = document.createElement("img");
        img.src = noticia.urlImage;
        img.style.minWidth = "100%";
        img.style.minHeight = "100%";
        img.style.objectFit = "cover";
        img.alt = `Imagen de noticia ${noticia.id}`;

        img.onload = () => {
          console.log(`Imagen cargada: ${img.src}`);
        };
        img.onerror = (e) => {
          console.error("Error al cargar la imagen", e);
        };

        imageContainer.appendChild(img);
        blogItem.appendChild(imageContainer);
        carouselItem.appendChild(blogItem);

        carouselInner.appendChild(carouselItem);
      });
    } else {
      console.log("No se encontraron noticias para mostrar en el carrusel.");
      errorMessage.innerHTML = "Error al cargar las imágenes.";
      carouselInner.appendChild(errorMessage);
    }
  } catch (error) {
    console.error("Error al cargar las noticias:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadCarousel();
});

//---------------------------------------------------------------- GET TESIS SECUANDARIOS
async function loadSecondaryNews() {
  const newsContainer = document.getElementById("secondaryNewsContainer");

  const loadingMessage = document.createElement("div");
  loadingMessage.classList.add("loading-message");
  loadingMessage.style.textAlign = "center";
  loadingMessage.style.fontSize = "20px";
  loadingMessage.style.color = "#000";
  loadingMessage.style.padding = "20px";

  newsContainer.appendChild(loadingMessage);

  const errorMessage = document.createElement("div");
  errorMessage.classList.add("error-message");
  errorMessage.style.textAlign = "center";
  errorMessage.style.fontSize = "20px";
  errorMessage.style.color = "red";
  errorMessage.style.padding = "20px";

  try {
    const response = await fetch(
      "http://localhost:1337/api/noticias-secundarios"
    );
    const data = await response.json();

    if (data && data.data && data.data.length > 0) {
      loadingMessage.innerHTML = "";
      errorMessage.innerHTML = "";
      const lastNews = data.data[data.data.length - 1];

      const newsItem = document.createElement("div");

      newsItem.innerHTML = `
              <div
                class="rounded overflow-hidden mb-2"
                style="max-height: 540px; display: flex; flex-direction: column"
              >
                <img
                  class="img-fluid"
                  src="${lastNews.urlImage}"
                  alt="${lastNews.titulo}"
                  style="flex-shrink: 0"
                />
                <div
                  class="bg-secondary p-4"
                  style="flex-grow: 1; overflow-y: auto"
                >
                  <div class="d-flex justify-content-between mb-3">
                    <small class="m-0"
                      ><i class="fa fa-map-marker-alt text-primary mr-2"></i>
                    ${lastNews.lugar}</small
                    >
                    <small class="m-0"
                      ><i class="far fa-clock text-primary mr-2"></i> ${
                        lastNews.horaInicio
                          ? formatTime(lastNews.horaInicio)
                          : "Sin hora"
                      }</small
                    >
                  </div>
                  <a class="h5" href="">${lastNews.titulo}</a>
                  <div class="border-top mt-2 pt-2 text-justify">
                    <p style="font-size: 14px">
                    ${lastNews.descripcion}
                    </p>
                  </div>
                  
                  <a
                    href=">${lastNews.urlPdf}"
                    class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2"
                    >Seguir leyendo</a
                  >
                </div>
              </div>
        `;

      newsContainer.appendChild(newsItem);
    } else {
      console.log("No se encontraron noticias para mostrar.");
      errorMessage.innerHTML = "No se encontraron noticias para mostrar.";
      newsContainer.appendChild(errorMessage);
    }
  } catch (error) {
    console.error("Error al cargar las noticias secundarias:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadSecondaryNews();
});

document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:1337/api/noticias-secundarios")
    .then((response) => response.json())
    .then((data) => {
      if (data.data.length > 0) {
        const noticias = data.data.slice(0, 4);

        noticias.forEach((noticia) => {
          const newsContainer = document.getElementById("noticias2");

          const noticiaHTML = `
              <div class="col-lg-4 col-md-6 mb-4">
                <div class="rounded overflow-hidden mb-2" style="max-height: 540px; display: flex; flex-direction: column">
                  <img class="img-fluid" src="${
                    noticia.urlImage
                  }" alt="" style="flex-shrink: 0; width: 100%; height: 250px; object-fit: cover;" />
                  <div class="bg-secondary p-4" style="flex-grow: 1; overflow-y: auto">
                    <div class="d-flex justify-content-between mb-3">
                      <small class="m-0"><i class="fa fa-map-marker-alt text-primary mr-2"></i> ${
                        noticia.lugar
                      }</small>
                      <small class="m-0"><i class="far fa-clock text-primary mr-2"></i> ${
                        noticia.horaInicio
                          ? formatTime(noticia.horaInicio)
                          : "Sin hora"
                      }</small>
                    </div>
                    <a class="h5" href="">${noticia.titulo}</a>
                    <div class="border-top mt-2 pt-2 text-justify">
                      <p style="font-size: 14px">
                        ${noticia.descripcion}
                      </p>
                    </div>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Seguir leyendo</a>
                  </div>
                </div>
              </div>
            `;

          newsContainer.innerHTML += noticiaHTML;
        });
      }
    })
    .catch((error) => console.error("Error al obtener las noticias:", error));
});

function formatTime(time) {
  const date = new Date("1970-01-01T" + time + "Z");
  return `${date.getUTCHours()}h ${date.getUTCMinutes()}m`;
}

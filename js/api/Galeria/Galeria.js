//---------------------------------------------------------------- GET GALERY
document.addEventListener('DOMContentLoaded', function() {
    
    fetch('http://localhost:1337/api/galerias')
      .then(response => response.json())
      .then(data => {
        if (data.data.length > 0) {
          const carouselImages = document.getElementById('carouselImages');
          
          data.data.forEach((galeria, index) => {
            const activeClass = index === 0 ? 'active' : ''; 
            const imageHTML = `
              <div class="carousel-item ${activeClass}">
                <img src="${galeria.urlImage}" class="d-block w-100" alt="Imagen ${index + 1}" />
              </div>
            `;
            carouselImages.innerHTML += imageHTML;
          });
        }
      })
      .catch(error => console.error('Error al obtener las galerías:', error));
  });
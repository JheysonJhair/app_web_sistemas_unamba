document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:1337/api/historias')
      .then(response => response.json())
      .then(data => {
        if (data.data.length > 0) {
          const historia = data.data[0]; 
  
          document.getElementById('historia-titulo').textContent = historia.titulo;
          document.getElementById('historia-descripcion').textContent = historia.descripcion;
        }
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  });
  
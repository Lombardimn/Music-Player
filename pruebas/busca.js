// Obtener elementos del DOM
const searchIcon = document.getElementById('searchIcon');
const searchContainer = document.getElementById('searchContainer');
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Mostrar u ocultar el buscador al hacer clic en el icono
searchIcon.addEventListener('click', () => {
searchContainer.classList.toggle('show');
});

// Realizar búsqueda al hacer clic en el botón
searchButton.addEventListener('click', () => {
const searchQuery = searchInput.value;
if (searchQuery) {
    performSearch(searchQuery);
}
});

// Realizar búsqueda al detectar un comando de voz válido
window.addEventListener('speechrecognition', (event) => {
const speechResult = event.results[0][0].transcript;
if (speechResult) {
    performSearch(speechResult);
}
});

// Función para realizar la búsqueda
function performSearch(query) {
// Realizar la acción de búsqueda, como redirigir a una página o mostrar resultados en el mismo sitio.
console.log('Realizando búsqueda:', query);
}

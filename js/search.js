// varibles
const searchInput = document.getElementById('search__input');
const clearButton = document.getElementById('clear__button');

const formInput = document.querySelector('#search__container');
const microphone = document.querySelector('#search__button--mic');
const popup = document.querySelector('#modal__listening');

// ApiBuscar = (inputText)=>{};





// input content deletion logic
searchInput.addEventListener('input', function() {
    clearButton.style.display = this.value ? 'block' : 'none';
});

clearButton.addEventListener('click', function() {
    searchInput.value = '';
    clearButton.style.display = 'none';
});


// call to search - llamada realiza por el buscador relacionada con la API
/* formInput.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(searchInput.value);
})*/
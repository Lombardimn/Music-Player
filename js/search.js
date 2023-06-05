//Functions
function performSearch(element){
    console.log('Realizando búsqueda:', element);
}

// Events

// Show or hide the search
searchIcon.addEventListener('click', () => {
    blockInput.classList.toggle('show');
    });

// input content deletion logic
searchInput.addEventListener('input', function() {
    clearBtn.style.display = this.value ? 'block' : 'none';
});

clearBtn.addEventListener('click', function() {
    searchInput.value = '';
    clearBtn.style.display = 'none';
});

// Search
searchBtn.addEventListener('click', () => {
    const searchQuery = searchInput.value;
    if (searchQuery) {
    performSearch(searchQuery);
    }
});

// Perform search on detection of a valid voice command
if ('webkitSpeechRecognition' in window) {
    const recognition = new webkitSpeechRecognition(); // Check compatibility
    
    // Setting the language
    recognition.lang = 'es-ES';
    
    // Modal active
    recognition.onstart = function() {
        popup.style.display = 'block';
    };
    
    // Show result
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        searchInput.value = transcript;
    };
    
    // Modal inactive
    recognition.onend = function() {
        popup.style.display = 'none';
    };
    
    // action initial
    microphone.addEventListener('click', function() {
        recognition.start();
    });
} else {
    console.log('Voice recognition is not supported by this browser.');
}


// Filtrado y listado de canciones disponibles
searchInput.addEventListener('input', function() {
    var searchTerm = searchInput.value.toLowerCase();

    var filteredArray = song.filter(function(obj) {
        return obj.displayName.toLowerCase().includes(searchTerm);
    });

    renderResults(filteredArray);
});

function renderResults(results) {
    resultList.innerHTML = '';

    results.forEach(function(obj) {
        var li = document.createElement('li');
        var div = document.createElement('div');
        var div2 = document.createElement('div');

        var nameSpan = document.createElement('span');
        nameSpan.textContent = obj.displayName;
        
        var artSpan = document.createElement('span');
        artSpan.textContent = obj.artista;

        var imgList = document.createElement('img');
        imgList.src = `multimedia/img/covers/${obj.img}.jpg`

        div2.appendChild(nameSpan);
        div2.appendChild(artSpan);
        div.appendChild(imgList);

        li.appendChild(div2);
        li.appendChild(div);

        li.classList.add('result-item');
        div.classList.add('div__img');
        div2.classList.add('div__content');
        imgList.classList.add('img__list');

        resultList.appendChild(li);
    });
}
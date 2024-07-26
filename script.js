let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    menu.classList.toggle('open');
};
window.onscroll=()=>{
    menu.classList.remove('bx-x');
    menu.classList.remove('open');
};
let darkmode=document.querySelector('#darkmode');
darkmode.onclick=()=>{
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('dark');
    }
    else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('dark')
    }
}

// Get the gallery container and upload form
const galleryContainer = document.querySelector('.gallery-container');
const uploadForm = document.querySelector('#upload-form');

// Add event listener to the upload form
uploadForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the uploaded image and description
    const imageInput = document.querySelector('#image-input');
    const descriptionInput = document.querySelector('#description-input');
    const image = imageInput.files[0];
    const description = descriptionInput.value;

    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = URL.createObjectURL(image);
    newImage.alt = description;

    // Add the new image to the gallery container
    galleryContainer.appendChild(newImage);

    // Clear the input fields
    imageInput.value = '';
    descriptionInput.value = '';
});


// Get the search input field, button, and results div
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Add an event listener to the search button
searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();
    if (searchTerm!== '') {
        // Call the search function
        search(searchTerm);
    }
});

// Define the search function
function search(searchTerm) {
    // Assume we have a data array with objects containing title and content properties
    const data = [
        { title: 'Item 1', content: 'This is item 1' },
        { title: 'Item 2', content: 'This is item 2' },
        { title: 'Item 3', content: 'This is item 3' },
        // Add more data objects here
    ];

    // Filter the data array based on the search term
    const results = data.filter((item) => {
        return item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
               item.content.toLowerCase().includes(searchTerm.toLowerCase());
    });

    // Display the search results
    searchResults.innerHTML = '';
    results.forEach((item) => {
        const resultHTML = `
            <h2>${item.title}</h2>
            <p>${item.content}</p>
        `;
        searchResults.innerHTML += resultHTML;
    });
}

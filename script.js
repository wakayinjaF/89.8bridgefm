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

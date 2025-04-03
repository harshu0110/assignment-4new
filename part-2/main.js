const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFiles = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

/* Declaring the alternative text for each image file */
const altTexts = ['Closeup of a human eye','Wavy white and blue fabric',
    'Purple and white flowers','Ancient Egyptian wall painting',
    'Butterfly on a green leaf'];

/* Looping through images */
imageFiles.forEach((src, index) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', src);
    newImage.setAttribute('alt', altTexts[index]);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', () => {
        displayedImage.src = src;
        displayedImage.alt = altTexts[index];
    });
});

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */

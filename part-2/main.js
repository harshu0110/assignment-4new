const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const imageFiles = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];
const altTexts = [
    'Closeup of a human eye','Wavy white and blue fabric','Purple and white flowers','Ancient Egyptian wall painting','Butterfly on a green leaf'];
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
btn.addEventListener('click', () => {
    if (btn.textContent === 'Darken') {
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
        btn.textContent = 'Lighten';
    } else {
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
        btn.textContent = 'Darken';
    }
});
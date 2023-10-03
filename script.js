
const gallery = document.querySelector('.image-gallery');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const modalCaption = document.querySelector('.modal-caption');
const closeModal = document.querySelector('.close-modal');

gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
        const imageUrl = e.target.src;
        const caption = e.target.nextElementSibling.textContent;
        
        modalContent.src = imageUrl;
        modalCaption.textContent = caption;
        modal.style.display = 'block';
    }
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

document.getElementById("youtubeButton").addEventListener("click", function () {
    window.location.href = "https://www.youtube.com/watch?v=Z1BCujX3pw8";
});
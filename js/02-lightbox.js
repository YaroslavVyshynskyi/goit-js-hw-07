import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);


function createGalleryItemMarkup(elements) { 
    return elements.map(({preview, description, original}) => { 
        return `
            <a
            class="gallery__item"
            href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"
            title="${description}"
            ></img></a>
            `;
        })
    .join("");
};

let gallery = new SimpleLightbox('.gallery__item', { captionDelay: 250 });


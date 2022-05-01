import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// const gallery = document.querySelector(".gallery");
// const galleryList = document.createElement("ul");
// galleryList.classList.add("gallery__list");
// gallery.append(galleryList);
// console.log(gallery);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);

console.log(createGalleryItemMarkup(galleryItems));

function createGalleryItemMarkup(elements) { 
    return elements.map(({preview, description, original}) => { 
    return `
        <div
        class="gallery__item">
        <a
        class="gallery__link">
        <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
        data-src="${original}"
        ></img></a></div>
        `;
    })
    .join("");
};

galleryContainer.addEventListener("click", onGalleryContainerClick);
function onGalleryContainerClick(evt) { 
    console.log(evt.target.dataset.src);
};


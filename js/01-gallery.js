import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", onGalleryContainerClick);

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

function onGalleryContainerClick(evt) { 
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) { 
        return
    }
    const originalImgSrc = evt.target.dataset.src;
    
    const instance = basicLightbox.create(`<img src=${originalImgSrc}>`, {
        closable: true,
        onShow: (instance) => { window.addEventListener('keydown', onModalPressEsc) },
        onClose: (instance) => { window.removeEventListener('keydown', onModalPressEsc) },
    });
    
    instance.show();

    function onModalPressEsc(event) { 
        if (event.key === "Escape") { 
            instance.close();
        }
    }
};


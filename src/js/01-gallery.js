// Add imports above this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';

// Change code below this line

const refs = {
    gallery: document.querySelector('.gallery')
}

const createImgListMarkup = (arr) =>
    arr.map(value =>
        `<a class="gallery__item" href="${value.original}">
            <img class="gallery__image" src="${value.preview}" alt="${value.description}" />
        </a>`
    ).join('');


refs.gallery.insertAdjacentHTML('afterbegin', createImgListMarkup(galleryItems))

const lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250 });


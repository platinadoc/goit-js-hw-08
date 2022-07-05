// Add imports above this line
import { galleryItems } from './gallery-items';
// Документация
import SimpleLightbox from "simplelightbox";
//Импортируем стили+
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);

const getGallery = document.querySelector("div.gallery");

const addList = galleryItems
  .map(
    ({
      description,
      original,
      preview,
    }) =>
`<div class="gallery-item"><a class="gallery__link" href="${original}">
<img class="gallery__image"
src="${preview}" 
data-source="${original}" 
alt="${description}"  >
</a></div>`
  )
  .join("");
getGallery.insertAdjacentHTML("afterbegin", addList);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  navText: ["<<", ">>"],
});
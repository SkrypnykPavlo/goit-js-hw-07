import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainerEl = document.querySelector('.gallery');
const galleryMarkup = makeGalleryMarkup(galleryItems);
galleryContainerEl.insertAdjacentHTML('beforeend', galleryMarkup);

function makeGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join('');
}
const onContainerClick = evt => {
  evt.preventDefault();

  const url = evt.target.dataset.source;
  if (!url) return;

  const instance = basicLightbox.create(`
    <img src="${url}"width="800" height="600">`);

  instance.show();
};
galleryContainerEl.addEventListener('click', onContainerClick);

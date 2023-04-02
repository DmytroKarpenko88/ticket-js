const gallery = document.querySelector('.gallery');

export function renderGallery(images) {
  const markup = images
    .map(image => {
      const { id, images, name, dates, _embedded } = image;
      return `<li class="card" data-id='${id}>
        <div class="card__decore"></div>
        <div class="card__image-wrap">
         <picture class="gallery__image">
            <source srcset="${images}" "media="(min-width:1280px)">
            <source srcset="${images}" "media="(min-width:768px)">
            <source srcset="${images}" "media="(max-width:767px)">
            <img src="${images} alt="${name}" loading="lazy" />
            // <img class="card__img" src="${images[1].url}" alt="${name}" loading="lazy" width=300 height=190/>
          </picture>
        </div>
        <p class="card__name">${name}</p>
        <p class="card__date">${dates.start.localDate}</p>
        <p class="card__place">
          <svg class="icon-place" width="" height="">
            <use href="#"></use>
          </svg>
          ${_embedded.venues[0].name}
        </p>
      </li>
    `;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

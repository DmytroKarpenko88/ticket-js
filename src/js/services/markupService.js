import sprite from './../../images/location.svg';

const gallery = document.querySelector('.gallery');

export function renderGallery(events) {
  const markup = events
    .map(event => {
      const { id, images, name, dates, _embedded } = event;
      const image = images.find(el => el.ratio === '4_3' && el.width === 305);

      return `<li class="card" data-id="${id}">
      <div class="card__decore"></div>
      <div class="card__image-wrap">
      <img class="card__img" src="${image.url}" alt="${name}" loading="lazy" width=${image.width} height=${image.height}/>
      </div>
      <p class="card__name">${name}</p>
      <p class="card__date">${dates.start.localDate}</p>
      <p class="card__place">
      <svg class="icon-place" width="10px" height="10px">
      <use href="${sprite}#icon-location"></use>
      </svg>
      ${_embedded.venues[0].name}
      </p>
      </li>
      `;
    })
    .join('');

  gallery.innerHTML = markup;
}

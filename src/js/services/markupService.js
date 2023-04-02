const gallery = document.querySelector('.gallery');

export function renderGallery(events) {
  const markup = events
    .map(event => {
      const { id, images, name, dates, _embedded } = event;
      const image = images.find(el => el.ratio === '4_3' && el.width === 305);
      console.log('image:', image);

      return `<li class="card" data-id="${id}">
      <div class="card__decore"></div>
      <div class="card__image-wrap">
      <img class="card__img" src="${image.url}" alt="${name}" loading="lazy" width=${image.width} height=${image.height}/>
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
  console.log('markup:', markup);

  gallery.insertAdjacentHTML('beforeend', markup);
}

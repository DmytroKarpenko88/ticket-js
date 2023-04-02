import { eventApi } from '../services/api';
import { renderGallery } from '../services/markupService';

const refs = {
  form: document.querySelector('#searchForm'),
};

refs.form.addEventListener('submit', onSearchEvents);

async function onSearchEvents(e) {
  e.preventDefault();
  const value = e.target.elements.searchInput.value;

  console.log('value:', value);

  try {
    const {
      data: {
        _embedded: { events },
      },
    } = await eventApi.fetchAllEvents(value);
    console.log('events:', events);
    renderGallery(events);
  } catch (error) {
    console.log(error.message);
  }
}
startrender();
async function startrender(value) {
  try {
    const {
      data: {
        _embedded: { events },
      },
    } = await eventApi.fetchAllEvents(value);
    console.log('events:', events);
    renderGallery(events);
  } catch (error) {
    console.log(error.message);
  }
}

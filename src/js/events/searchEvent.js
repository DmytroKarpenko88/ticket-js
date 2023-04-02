import { eventApi } from '../services/api';

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
  } catch (error) {
    console.log(error.message);
  }
}

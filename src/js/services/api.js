import axios from 'axios';

const apiTicketmaster = axios.create({
  baseURL: 'https://app.ticketmaster.com/discovery/v2/',
  params: {
    apikey: 'r2n1qFmKAGJf9u4guojkmdnIGBUfuJeA',
  },
});

class EventApi {
  constructor() {}

  #page = 1;
  #size = 16;
  searchValue = '';

  set page(page) {
    this.#page = page;
  }

  get page() {
    return this.#page;
  }
  //запит на серевер з фільтрацією по ключупошуку, кількості об'єктів у відповідь і номером сторінки
  async fetchAllEvents(searchValue, countryCode) {
    this.searchValue = searchValue ?? this.searchValue;
    this.countryCode = countryCode ?? this.countryCode;
    const config = {
      params: {
        page: this.#page - 1,
        size: this.#size,
        keyword: this.searchValue,
      },
    };

    return await apiTicketmaster.get(`events.json`, config);
  }
  // пошук по id події
  async fetchEvent(id) {
    return await apiTicketmaster.get(`events/${id}.json`);
  }
}

export const eventApi = new EventApi();

const page = eventApi.page;
console.log('page:', page);

//для перевірки запиту
export async function event(searchEvent) {
  try {
    return await eventApi.fetchAllEvents(searchEvent);
  } catch (error) {
    console.log(error.message);
  }
}
// event();

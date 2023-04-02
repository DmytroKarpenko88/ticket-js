import axios from 'axios';



// const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/';

//   'https://app.ticketmaster.com/discovery/v2/events.json?apikey=r2n1qFmKAGJf9u4guojkmdnIGBUfuJeA';

const API_KEY = 'r2n1qFmKAGJf9u4guojkmdnIGBUfuJeA';
const URL = 'https://app.ticketmaster.com/discovery/v2/events.json';



export async function fetchTicket() {
  const config = {
    params: {
      apikey: API_KEY,
    },
  };

  try {
    const response = await axios.get(URL, config);

    return response;
  } catch (error) {
    console.error(error.message);
  }
}

console.log(fetchTicket());

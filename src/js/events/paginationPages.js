// import Pagination from 'tui-pagination';
// import axios from 'axios';

// const apiKey = 'r2n1qFmKAGJf9u4guojkmdnIGBUfuJeA';
// const eventsPerPage = 10;
// let currentPage = 1;
// let totalPages = 0;

// const eventList = document.getElementById('event-list');
// const paginationContainer = document.getElementById('pagination');

// function renderEvents(page) {
//   axios
//     .get(
//       `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&size=${eventsPerPage}&page=${page}`
//     )
//     .then(response => {
//       const events = response.data._embedded.events;
//       const html = events
//         .map(
//           event => `
//       <li>
//                     <div>
//                       <img data-src="${event.images[0].url}" alt="${event.name}" />
//                     </div>
//                     <div>
//                       <h2>${event.name}</h2>
//                       <p>${event.dates.start.localDate} at ${event.dates.start.localTime}</p>
//                        <p>${event._embedded.venues[0].name}, ${event._embedded.venues[0].city.name}</p>
//                     </div>
//                   </li>`
//         )
//         .join('');
//       eventList.innerHTML = html;
//       window.scrollTo(0, 0);
//     })
//     .catch(error => {
//       console.log('Error:', error);
//     });
// }

// function renderPagination(totalEvents) {
//   totalPages = Math.ceil(totalEvents / eventsPerPage);
//   const options = {
//     totalItems: totalEvents,
//     itemsPerPage: eventsPerPage,
//     visiblePages: 4,
//     page: currentPage,
//     centerAlign: true,
//     href: '#event-list',
//     onPageClick: (_event, page) => {
//       currentPage = page;
//       renderEvents(currentPage);
//       const images = document.querySelectorAll('#event-list img[data-src]');
//       images.forEach(img => {
//         img.setAttribute('src', img.getAttribute('data-src'));
//         img.removeAttribute('data-src');
//       });
//     },
//   };
//   const pagination = new Pagination(paginationContainer, options);
//   pagination = getCurrentPage();
// }

// axios
//   .get(
//     `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&size=${eventsPerPage}`
//   )
//   .then(response => {
//     const totalEvents = response.data.page.totalElements;
//     renderPagination(totalEvents);
//     renderEvents(currentPage);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });

// import axios from 'axios';

// const apiKey = 'r2n1qFmKAGJf9u4guojkmdnIGBUfuJeA';
// const eventsPerPage = 10;

// let currentPage = 1;
// let totalPages = 0;
// const eventList = document.getElementById('event-list');
// const paginationContainer = document.getElementById('pagination');

// function renderEvents(events) {
//   const html = events
//     .map(
//       event => `
//       <li>
//         <div>
//           <img src="${event.images[0].url}" alt="${event.name}" />
//         </div>
//         <div>
//           <h2>${event.name}</h2>
//           <p>${event.dates.start.localDate} at ${event.dates.start.localTime}</p>
//           <p>${event._embedded.venues[0].name}, ${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].country.countryCode}</p>
//         </div>
//       </li>`
//     )
//     .join('');
//   eventList.innerHTML = html;
//   window.scrollTo(0, 0);
// }

// function renderPagination(totalEvents) {
//   totalPages = Math.ceil(totalEvents / eventsPerPage);
//   const html = Array.from({ length: totalPages }, (_, i) => {
//     const pageNum = i + 1;
//     return `<li><a href="#" class="page-link" data-page="${pageNum}">${pageNum}</a></li>`;
//   }).join('');
//   paginationContainer.innerHTML = html;

//   paginationContainer.addEventListener('click', e => {
//     e.preventDefault();
//     const pageLink = e.target.closest('.page-link');
//     if (pageLink) {
//       currentPage = Number(pageLink.dataset.page);
//       axios
//         .get(
//           `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&size=${eventsPerPage}&page=${currentPage}`
//         )
//         .then(response => {
//           const events = response.data._embedded.events;
//           renderEvents(events);
//         })
//         .catch(error => {
//           console.log('Error:', error);
//         });
//     }
//   });
// }

// axios
//   .get(
//     `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apiKey}&size=${eventsPerPage}`
//   )
//   .then(response => {
//     const totalEvents = response.data.page.totalElements;
//     renderPagination(totalEvents);
//     const events = response.data._embedded.events;
//     renderEvents(events);
//   })
//   .catch(error => {
//     console.log('Error:', error);
//   });

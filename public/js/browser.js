// First, an example fetch() for inspiration. Lorem Picsum has a JSON API!
// fetch('https://picsum.photos/id/237/info')
//   .then(function(response) {
//     return response.json();
//   })
//   .then(function(data) {
//     console.log(data);
// });

// But let's use our own JSON API:
// Since the execution of this `app.js` script will be long finished by the time the following `fetch()` call returns data, we need to put our loop inside the second .then(). Check out this CSS Tricks article for the details about what's going on here. 
// https://css-tricks.com/using-fetch/
fetch('http://localhost:3000/api/travelGoals')
  .then(function(response) {
    console.log(response);  
    return response.json();
  })
  .then(function(travelGoals) {

    const imgInfoArray = travelGoals;

    // Variable where we will store our img tags
    let imgTemplate = ''; 

    // Flex container for images
    const gallery = document.querySelector('.gallery'); 

    // Loop through items using forEach (available on every array)
    imgInfoArray.forEach(function(item){
      imgTemplate += 
        `<div>
          <a href="${item.id}">
            <img src="https://picsum.photos/id/${item.id}/600" alt="${item.altText}">
          </a>
          <a href="${item.linkURL}" target="blank">
            <p>${item.description}</p>
          </a>
        </div>`;
    });

    // Add HTML img string to gallery container
    gallery.innerHTML = imgTemplate;
});




// Array of objects NOT NEEDED ANYMORE

// const imgInfoArray =
// [
//     {
//         id:           1043,
//         fileName:     '1043-.jpg',
//         altText:      'Canadian Rockies',
//         description:  'Explore Nature in the Canadian Rockies',
//         linkURL:      'https://www.banffjaspercollection.com/canadian-rockies/',
//         attribution:  {
//             source:   'lorem picsum',
//             credit:   'Christian Joudrey',
//             srcURL:   'https://unsplash.com/photos/mWRR1xj95hg'
//         }
//     },
//     {
//         id:           188,
//         fileName:     '188-Prague.jpg',
//         altText:      'Prague, Czech Republic',
//         description:  'Gem cities of Eastern Europe',
//         linkURL:      'https://www.twowanderingsoles.com/blog/19-bucket-list-experiences-in-eastern-europe',
//         attribution:  {
//             source:   'lorem picsum',
//             credit:   'Wojtek Witkowski',
//             srcURL:   'https://unsplash.com/photos/1fpyA_z2woY'
//         }
//     },
//     {
//         id:           238,
//         fileName:     '238-Buildings.jpg',
//         altText:      'Buildings in New York',
//         description:  'Dream Destinations for modern architectural enthusiasts',
//         linkURL:      'https://suitcasemag.com/articles/architecture-destinations',
//         attribution:  {
//             source:   'lorem picsum',
//             credit:   'Anders Jilden',
//             srcURL:   'https://unsplash.com/photos/yb0Qs65aZmc'
//         }
//     },
//     {
//         id:           164,
//         fileName:     '164-Venice.jpg',
//         altText:      'Venice, Italy',
//         description:  'Tour the best of Italy',
//         linkURL:      'https://www.earthtrekkers.com/15-best-places-visit-italy/',
//         attribution:  {
//             source:   'lorem picsum',
//             credit:   'Linh Nguyen',
//             srcURL:   'https://unsplash.com/photos/agkblvPff5U'
//         }
//     },
//     {
//         id:           218,
//         fileName:     '218-Beach.jpg',
//         altText:      'Beach View',
//         description:  'Discover trending beach destinations in 2020',
//         linkURL:      'https://www.smartertravel.com/best-beach-destinations/',
//         attribution:  {
//             source:   'lorem picsum',
//             credit:   'Monika Majkowska',
//             srcURL:   'https://unsplash.com/photos/Nq8LdWC7HnM'
//         }
//     },
//     {
//         id:           292,
//         fileName:     '292-CookingIngredients.jpg',
//         altText:      'Cooking Ingredients',
//         description:  'Experience culture with your taste buds',
//         linkURL:      'https://www.loveexploring.com/gallerylist/69944/the-50-best-food-cities',
//         attribution:  {
//             source:   'lorem picsum',
//             credit:   'Webvilla',
//             srcURL:   'https://unsplash.com/photos/hv1MrBzGGNY'
//         }
//     }
// ];
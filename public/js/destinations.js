// this JS creates a looping gallery that loops the destination images and description in the index.html destination section

fetch('http://localhost:3000/api/travelGoals')
  .then(function(response) {
    console.log(response);  
    return response.json();
  })
  .then(function(travelGoals) {

    // Define array
    const imgInfoArray = travelGoals;
    // variable where we will store our img tags
    let imgTemplate = ''; 
    // flex container for images
    const gallery = document.querySelector('.jsDest'); 
    // display the first image
    imgTemplate = 
      `<div>
        <a href="gallery.html">
          <img src="images/${imgInfoArray[0].fileName}" alt="${imgInfoArray[0].altText}">
        </a>
        <a href="${imgInfoArray[0].linkURL}" target="_blank">
          <p>${imgInfoArray[0].description}</p>
        </a>
      </div>`;      
    gallery.innerHTML = imgTemplate;
    // define function that outputs image (with link) and description (with link in new tab)
    function loopGallery(i) {
      setTimeout (function() {
        // create template literal
        imgTemplate = 
          `<div>
            <a href="/gallery">
              <img src="https://picsum.photos/id/${imgInfoArray[i].id}/600" alt="${imgInfoArray[i].altText}">
            </a>
            <a href="${imgInfoArray[i].linkURL}" target="_blank">
              <p>${imgInfoArray[i].description}</p>
            </a>
          </div>`;
        // Add template literal to gallery container (div under Destinations)
        gallery.innerHTML = imgTemplate;    
        // increment index
        i ++;
        // if the index reaches the the length of array, reset to first index
        if (i === imgInfoArray.length) {i = 0};       
        // recall the parent function to create a recursive loop to 'loop' through images.
        loopGallery(i);
        // Time delay before looping to the next picture (milliseconds)
      }, 2000);
    }
    // initiate the function starting from index '0'
    loopGallery(0);

  });

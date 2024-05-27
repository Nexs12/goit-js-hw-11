
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";




const refs = {
    formEl: document.querySelector('.search-word'),
    searchEl: document.querySelector('.search-btn'),
}

function searchImage(image) {
    const BASE_URL = 'https://pixabay.com/api/';
   
    const params = new URLSearchParams({
        key: '44102450-6df98fde061003ef9a12efa89',
        q: image,
        image_type: photo,
        orientation: horizontal,
        safesearch: true,
    });
    const url = `${BASE_URL}?${params}`;

    const headers = {
        
    };

    return fetch(url, { headers }.then(res => res.json()));
}

searchImage('flower');


function imagesList(images) {
    return `<li>
  <img src="" alt="">
  <ul>
    <li>
      <h1></h1>
      <p></p>
    </li>
    <li>
      <h1></h1>
      <p></p>
    </li>
    <li>
      <h1></h1>
      <p></p>
    </li>
    <li>
      <h1></h1>
      <p></p>
    </li>
  </ul>
</li>`
};
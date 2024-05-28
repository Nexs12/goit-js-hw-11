import '/css/styles.css'
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";




const refs = {
  formEl: document.querySelector('#search-form'),
  searchEl: document.querySelector('.search-btn'),
}

refs.searchEl.addEventListener('click', () => {
  const imageValue = refs.formEl.elements.input.value;

  searchImage(imageValue)
                .then(response => response.json())
                .then(data => {
                    if (data.hits.length > 0) {
                        imagesList(data.hits);
                    } else {
                        iziToast.error({
                            position: 'topRight',
                            message: 'Sorry, there are no images matching your search query. Please, try again!',
                        });
                    }
                    refs.formEl.reset();
                })
                .catch(error => {
                    console.error('Error fetching images:', error);
                    iziToast.error({
                        title: 'Error',
                        message: 'Something went wrong. Please try again later.',
                    });
                });
        });

function searchImage(image) {
  const BASE_URL = 'https://pixabay.com/api/';

  const params = new URLSearchParams({
    key: '44102450-6df98fde061003ef9a12efa89',
    q: image,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url);
}

function imagesList(images) {
  const gallery = document.getElementById('gallery');
  
  const imageMarkup = images
    .map(image => 
      `<a href="${image.largeImageURL}" data-lightbox="gallery" data-title="${image.tags}">
          <img src="${image.webformatURL}" alt="${image.tags}">
          <ul class="image-info">
              <li class="info-item">Likes<br><span>${image.likes}</span></д>
              <li class="info-item">Views<br><span>${image.views}</span></д>
              <li class="info-item">Comments<br><span>${image.comments}</span></д>
              <li class="info-item">Downloads<br><span>${image.downloads}</span></д>
          </ul>
      </a>`
    )
    .join('');

  gallery.innerHTML = imageMarkup;

  const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250 

});
}
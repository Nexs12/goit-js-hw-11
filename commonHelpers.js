import{i as l,S as c}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const i={formEl:document.querySelector("#search-form"),searchEl:document.querySelector(".search-btn")};i.searchEl.addEventListener("click",()=>{const o=i.formEl.elements.input.value;f(o).then(t=>t.json()).then(t=>{t.hits.length>0?u(t.hits):l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please, try again!"}),i.formEl.reset()}).catch(t=>{console.error("Error fetching images:",t),l.error({title:"Error",message:"Something went wrong. Please try again later."})})});function f(o){const t="https://pixabay.com/api/",n=new URLSearchParams({key:"44102450-6df98fde061003ef9a12efa89",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}),r=`${t}?${n}`;return fetch(r)}function u(o){const t=document.getElementById("gallery"),n=o.map(r=>`<a href="${r.largeImageURL}" data-lightbox="gallery" data-title="${r.tags}">
          <img src="${r.webformatURL}" alt="${r.tags}">
          <ul class="image-info">
              <li class="info-item">Likes<br><span>${r.likes}</span></д>
              <li class="info-item">Views<br><span>${r.views}</span></д>
              <li class="info-item">Comments<br><span>${r.comments}</span></д>
              <li class="info-item">Downloads<br><span>${r.downloads}</span></д>
          </ul>
      </a>`).join("");t.innerHTML=n,new c(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map

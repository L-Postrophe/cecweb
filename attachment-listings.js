// Interactive attachment listings.
// Renders simple title cards for each attachment subcategory.

const CEC_ATTACHMENT_LISTINGS = {
 "other-attachments": {
 "category": "Clamshell Buckets",
 "subcategories": [
 {
 "id": "other-clamshell",
 "label": "Clamshell Buckets",
 "items": [
 { "title": "Clamshell Bucket", "image": "img/attachments/clamshell-bucket.png", "alt": "Clamshell bucket attachment" },
 { "title": "Clamshell Bucket — Example B" },
 { "title": "Clamshell Bucket — Example C" }
 ]
 }
 ]
 }

};

function createAttachmentCard(item) {
 const article = document.createElement('article');
 article.className = 'example-card attachment-example-card';

 if (item.image) {
 const imageWrap = document.createElement('div');
 imageWrap.className = 'example-card-image';

 const image = document.createElement('img');
 image.src = item.image;
 image.alt = item.alt || item.title;
 image.loading = 'lazy';

 imageWrap.appendChild(image);
 article.appendChild(imageWrap);
 }

 const title = document.createElement('h4');
 title.textContent = item.title;
 article.appendChild(title);
 return article;
}

function renderAttachmentListings(pageKey, subcategoryId) {
 const pageData = CEC_ATTACHMENT_LISTINGS[pageKey];
 if (!pageData) return;

 const subcategory = pageData.subcategories.find((entry) => entry.id === subcategoryId) || pageData.subcategories[0];
 if (!subcategory) return;

 document.querySelectorAll('[data-attachment-capacity]').forEach((tab) => {
 const isActive = tab.dataset.attachmentCapacity === subcategory.id;
 tab.classList.toggle('is-active', isActive);
 tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
 });

 const title = document.querySelector('[data-attachment-title]');
 if (title) {
 title.textContent = subcategory.label === pageData.category ? pageData.category : `${pageData.category} — ${subcategory.label}`;
 }

 const intro = document.querySelector('[data-attachment-intro]');
 if (intro) {
 intro.textContent = `Contact CEC for current availability.`;
 }

 const grid = document.querySelector('[data-attachment-grid]');
 if (!grid) return;

 grid.innerHTML = '';
 subcategory.items.forEach((item) => {
 grid.appendChild(createAttachmentCard(item));
 });
}

document.addEventListener('DOMContentLoaded', () => {
 const pageKey = document.body.dataset.attachmentListingsPage;
 const pageData = CEC_ATTACHMENT_LISTINGS[pageKey];
 if (!pageData) return;

 const tabs = document.querySelectorAll('[data-attachment-capacity]');
 const defaultSubcategory = tabs[0]?.dataset.attachmentCapacity || pageData.subcategories[0]?.id;
 renderAttachmentListings(pageKey, defaultSubcategory);

 tabs.forEach((tab) => {
 const chooseSubcategory = () => {
 renderAttachmentListings(pageKey, tab.dataset.attachmentCapacity);
 document.getElementById('attachment-listings-display')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
 };

 tab.addEventListener('click', chooseSubcategory);
 tab.addEventListener('keydown', (event) => {
 if (event.key === 'Enter' || event.key === ' ') {
 event.preventDefault();
 chooseSubcategory();
 }
 });
 });
});

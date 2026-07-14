// Interactive crane listings.
// Crane renders image-and-title cards for each capacity range.

const CEC_CRANE_LISTINGS = {
 "rough-terrain": {
 "category": "Rough Terrain Cranes",
 "capacities": [
 {
 "id": "rough-25-35",
 "label": "25 to 35 Tons",
 "image": "img/cranes/rt_35_tadano_gr350_replaces_gr300.jpg",
 "items": [
 {
 "title": "Tadano GR-250N — 25 Ton Rough Terrain Crane",
 "image": "img/cranes/rt_25_tadano_gr250n_mochizuki.jpg"
 },
 {
 "title": "Tadano GR-350 — 35 Ton Rough Terrain Crane",
 "image": "img/cranes/rt_35_tadano_gr350_replaces_gr300.jpg"
 },
 {
 "title": "Tadano GR-350XL-3 — 35 Ton Rough Terrain Crane",
 "image": "img/cranes/rt_35_tadano_gr-350xl-3.jpg"
 }
 ]
 },
 {
 "id": "rough-45-60",
 "label": "45 to 60 Tons",
 "image": "img/cranes/rt_50_kato_kr50hl2.jpg",
 "items": [
 {
 "title": "Kato KR-50H-L2 — 50 Ton Rough Terrain Crane",
 "image": "img/cranes/rt_50_kato_kr50hl2.jpg"
 },
 {
 "title": "Kato KR-50HV — 50 Ton Rough Terrain Crane",
 "image": "img/cranes/rt_50_kato_kr50hv.jpg"
 },
 {
 "title": "Tadano GR-600 — 60 Ton Rough Terrain Crane",
 "image": "img/cranes/rt_60_tadano_gr600.jpg"
 }
 ]
 },
 {
 "id": "rough-80",
 "label": "80 Tons",
 "image": "img/cranes/rt_80_tadano_gr800ex_blue_view_1.png",
 "items": [
 {
 "title": "Tadano GR-800EX — 80 Ton Rough Terrain Crane",
 "image": "img/cranes/rt_80_tadano_gr800ex_blue_view_1.png"
 },
 {
 "title": "Tadano GR-800EX — 80 Ton Rough Terrain Crane",
 "image": "img/cranes/rt_80_tadano_gr800ex_blue_view_2.png"
 },
 {
 "title": "Kato SL-850Rf — 80 Ton Rough Terrain Crane",
 "image": "img/cranes/rt_80_kato_sl-850rf.jpg"
 }
 ]
 }
 ]
 },
 "crawler": {
 "category": "Crawler Cranes",
 "capacities": [
 {
 "id": "crawler-45-70",
 "label": "45 to 70 Tons",
 "image": "img/cranes/crawler_65_sumitomo_sc650-2_replaces_7055.jpg",
 "items": [
 {
 "title": "Sumitomo SC650-2 — 65 Ton Crawler Crane",
 "image": "img/cranes/crawler_65_sumitomo_sc650-2_replaces_7055.jpg"
 },
 {
 "title": "Sumitomo SC650-2 — 65 Ton Crawler Crane",
 "image": "img/cranes/crawler_65_sumitomo_sc650-2.jpg"
 },
 {
 "title": "Hitachi CX650 — 65 Ton Crawler Crane",
 "image": "img/cranes/crawler_65_hitachi_cx650.jpg"
 }
 ]
 },
 {
 "id": "crawler-80-120",
 "label": "80 to 120 Tons",
 "image": "img/cranes/crawler_80_sumitomo_sc800-2.jpg",
 "items": [
 {
 "title": "Sumitomo SC800-2 — 80 Ton Crawler Crane",
 "image": "img/cranes/crawler_80_sumitomo_sc800-2.jpg"
 },
 {
 "title": "Sumitomo SC1000-2 — 100 Ton Crawler Crane",
 "image": "img/cranes/crawler_100_sumitomo_sc1000-2.jpg"
 },
 {
 "title": "IHI CCH1200 — 120 Ton Crawler Crane",
 "image": "img/cranes/crawler_120_ihi_cch1200.jpg"
 }
 ]
 },
 {
 "id": "crawler-150-250",
 "label": "150 to 250 Tons",
 "image": "img/cranes/crawler_150_kobelco_7150.jpg",
 "items": [
 {
 "title": "Kobelco 7150 — 150 Ton Crawler Crane",
 "image": "img/cranes/crawler_150_kobelco_7150.jpg"
 },
 {
 "title": "Sumitomo SC1500 — 150 Ton Crawler Crane",
 "image": "img/cranes/crawler-150to250-2.jpg"
 },
 {
 "title": "Sumitomo SC2000 — 200 Ton Crawler Crane",
 "image": "img/cranes/crawler_200_sumitomo_sc2000.jpg"
 }
 ]
 }
 ]
 },
 "all-terrain": {
 "category": "All Terrain Cranes",
 "capacities": [
 {
 "id": "all-80-120",
 "label": "80 to 120 Tons",
 "image": "img/cranes/at_80_tadano_ac-4-080-1.jpg",
 "items": [
 {
 "title": "Tadano AC 4.080-1 — 80 Ton All Terrain Crane",
 "image": "img/cranes/at_80_tadano_ac-4-080-1.jpg"
 },
 {
 "title": "Tadano AC 4.100L-1 — 100 Ton All Terrain Crane",
 "image": "img/cranes/at_100_tadano_ac-4-100l-1.png"
 },
 {
 "title": "Tadano AC 5.120-1 — 120 Ton All Terrain Crane",
 "image": "img/cranes/at_120_tadano_ac-5-120-1.jpg"
 }
 ]
 },
 {
 "id": "all-150-250",
 "label": "150-250 Tons",
 "image": "img/cranes/at_200_tadano_ar2000m.jpg",
 "items": [
 {
 "title": "Liebherr LTM 1170N-2 — 170 Ton All Terrain Crane",
 "image": "img/cranes/at_170_liebherr_ltm1170n2_side.jpg"
 },
 {
 "title": "Tadano ATF 200G-5 — 200 Ton Class All Terrain Crane",
 "image": "img/cranes/at_200_tadano_atf200g-5.jpg"
 },
 {
 "title": "Tadano AR2000M — 200 Ton All Terrain Crane",
 "image": "img/cranes/at_200_tadano_ar2000m.jpg"
 }
 ]
 }
 ]
 }
};

function createListingCard(item, capacity) {
 const article = document.createElement('article');
 article.className = 'example-card';

 const imageWrap = document.createElement('div');
 imageWrap.className = 'example-card-image';

 const image = document.createElement('img');
 image.src = item.image || capacity.image;
 image.alt = item.imageAlt || `${item.title} image`;
 image.loading = 'lazy';
 imageWrap.appendChild(image);

 const title = document.createElement('h4');
 title.textContent = item.title;

 article.append(imageWrap, title);
 return article;
}

function renderCraneListings(pageKey, capacityId) {
 const pageData = CEC_CRANE_LISTINGS[pageKey];
 if (!pageData) return;

 const capacity = pageData.capacities.find((entry) => entry.id === capacityId) || pageData.capacities[0];
 if (!capacity) return;

 document.querySelectorAll('[data-listing-capacity]').forEach((tab) => {
 const isActive = tab.dataset.listingCapacity === capacity.id;
 tab.classList.toggle('is-active', isActive);
 tab.setAttribute('aria-pressed', isActive ? 'true' : 'false');
 });

 const title = document.querySelector('[data-listing-title]');
 if (title) {
 title.textContent = `${pageData.category} — ${capacity.label}`;
 }

 const intro = document.querySelector('[data-listing-intro]');
 if (intro) {
 intro.textContent = `Contact CEC for current availability.`;
 }

 const grid = document.querySelector('[data-listing-grid]');
 if (!grid) return;

 grid.innerHTML = '';
 capacity.items.forEach((item) => {
 grid.appendChild(createListingCard(item, capacity));
 });
}

document.addEventListener('DOMContentLoaded', () => {
 const pageKey = document.body.dataset.craneListingsPage;
 const pageData = CEC_CRANE_LISTINGS[pageKey];
 if (!pageData) return;

 const tabs = document.querySelectorAll('[data-listing-capacity]');
 const defaultCapacity = tabs[0]?.dataset.listingCapacity || pageData.capacities[0]?.id;
 renderCraneListings(pageKey, defaultCapacity);

 tabs.forEach((tab) => {
 const chooseCapacity = () => {
 renderCraneListings(pageKey, tab.dataset.listingCapacity);
 document.getElementById('listings-display')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
 };

 tab.addEventListener('click', chooseCapacity);
 tab.addEventListener('keydown', (event) => {
 if (event.key === 'Enter' || event.key === ' ') {
 event.preventDefault();
 chooseCapacity();
 }
 });
 });
});

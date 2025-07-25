// MemeStream App Logic

const dailyBtn = document.getElementById('daily-btn');
const adBtn = document.getElementById('ad-btn');
const premiumBtn = document.getElementById('premium-btn');
const viewCollectionBtn = document.getElementById('view-collection-btn');
const memeImg = document.getElementById('meme-img');
const memeTitle = document.getElementById('meme-title');
const message = document.getElementById('message');
const adOverlay = document.getElementById('ad-overlay');
const collectionOverlay = document.getElementById('collection-overlay');
const collectionList = document.getElementById('collection-list');

// Retrieve stored data
let collection = JSON.parse(localStorage.getItem('memeCollection')) || [];
let lastDailyDate = localStorage.getItem('lastDailyDate');
let premium = localStorage.getItem('premium') === 'true';

function pickRandomMeme() {
  return memes[Math.floor(Math.random() * memes.length)];
}

function displayMeme(meme) {
  memeImg.src = meme.url;
  memeTitle.textContent = meme.title;
}

function addToCollection(meme) {
  collection.push(meme);
  localStorage.setItem('memeCollection', JSON.stringify(collection));
}

function handleDaily() {
  const today = new Date().toISOString().split('T')[0];
  if (lastDailyDate === today) {
    message.textContent = 'You have already viewed your daily meme! Come back tomorrow.';
    return;
  }
  const meme = pickRandomMeme();
  displayMeme(meme);
  addToCollection(meme);
  lastDailyDate = today;
  localStorage.setItem('lastDailyDate', today);
  message.textContent = '';
}

function handleAd() {
  // Simulate a rewarded ad by showing overlay for 5 seconds
  adOverlay.classList.remove('hidden');
  message.textContent = '';
  setTimeout(() => {
    adOverlay.classList.add('hidden');
    const meme = pickRandomMeme();
    displayMeme(meme);
    addToCollection(meme);
    message.textContent = 'Thanks for watching the ad!';
  }, 5000);
}

function handlePremium() {
  premium = true;
  localStorage.setItem('premium', 'true');
  adBtn.classList.add('hidden');
  premiumBtn.classList.add('hidden');
  message.textContent = 'Premium activated! Unlimited memes and no ads.';
}

function showCollection() {
  collectionList.innerHTML = '';
  if (collection.length === 0) {
    const p = document.createElement('p');
    p.textContent = 'You have not collected any memes yet.';
    collectionList.appendChild(p);
  } else {
    collection.forEach((meme) => {
      const img = document.createElement('img');
      img.src = meme.url;
      img.title = meme.title;
      collectionList.appendChild(img);
    });
  }
  collectionOverlay.classList.remove('hidden');
}

function hideCollection() {
  collectionOverlay.classList.add('hidden');
}

function init() {
  // If premium, hide ad and premium buttons
  if (premium) {
    adBtn.classList.add('hidden');
    premiumBtn.classList.add('hidden');
  }
  // Display last meme if available
  if (collection.length > 0) {
    const last = collection[collection.length - 1];
    displayMeme(last);
  }
  dailyBtn.addEventListener('click', handleDaily);
  adBtn.addEventListener('click', handleAd);
  premiumBtn.addEventListener('click', handlePremium);
  viewCollectionBtn.addEventListener('click', showCollection);
  document.getElementById('close-collection-btn').addEventListener('click', hideCollection);
}

document.addEventListener('DOMContentLoaded', init);

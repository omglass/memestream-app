const memes = [
  { url: 'https://picsum.photos/id/237/400/400', title: 'Space Dog' },
  { url: 'https://picsum.photos/id/238/400/400', title: 'Serious Cat' },
  { url: 'https://picsum.photos/id/239/400/400', title: 'Grumpy Pug' },
  { url: 'https://picsum.photos/id/240/400/400', title: 'Happy Couple' },
  { url: 'https://picsum.photos/id/241/400/400', title: 'Confused Baby' },
  { url: 'https://picsum.photos/id/242/400/400', title: 'Laughing Man' },
  { url: 'https://picsum.photos/id/243/400/400', title: 'Surprised Kid' },
  {url: 'httpsum.photos/id/244/400/400', title: 'Cute Panda' },
  { url: 'https://picsum.photos/id/245/400/400', title: 'Epic Fail' },
  { url: 'https://picsum.photos/id/246/400/400', title: 'Meme King' },
  { url: 'https://picsum.photos/id/247/400/400', title: 'Sleepy Sloth' },
  { url: 'https://picsum.photos/id/248/400/400', title: 'Wild Party' }
];

// Expose memes array to other scripts
if (typeof window !== 'undefined') {
  window.memes = memes;
}

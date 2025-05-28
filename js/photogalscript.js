const mainImage = document.getElementById('mainImage');
const thumbnails = document.querySelectorAll('#thumbnails img');

let currentIndex = 0;

function updateImage(index) {
  const newSrc = thumbnails[index].getAttribute('data-full');
  mainImage.src = newSrc;

  thumbnails.forEach(img => img.classList.remove('active'));
  thumbnails[index].classList.add('active');

  currentIndex = index;
}

// Thumbnail click event
thumbnails.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    updateImage(index);
  });
});

// Swipe detection
let startX = 0;

mainImage.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
});

mainImage.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  let diff = startX - endX;

  if (diff > 50) {
    // swipe left (next)
    currentIndex = (currentIndex + 1) % thumbnails.length;
    updateImage(currentIndex);
  } else if (diff < -50) {
    // swipe right (previous)
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    updateImage(currentIndex);
  }
});

// Initialize first active thumbnail
updateImage(currentIndex);


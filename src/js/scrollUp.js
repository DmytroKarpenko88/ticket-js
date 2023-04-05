const btn = document.querySelector('.arrow');

function scrollUp() {
  if (window.pageYOffset > 100) {
    btn.style.opacity = '1';
    btn.style.cursor = 'pointer';
  } else {
    btn.style.opacity = '0';
    btn.style.cursor = 'default';
  }
}

btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
window.onscroll = scrollUp;
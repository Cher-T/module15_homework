const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    btn.querySelector('.icon').classList.toggle('icon-hollow');
    btn.querySelector('.icon').classList.toggle('icon-full');
});
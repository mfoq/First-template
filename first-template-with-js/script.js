const icon = document.getElementsByClassName('icon')[0];
const links = document.getElementsByClassName('links')[0];

icon.addEventListener('click', () => {
    links.classList.toggle('active')
})
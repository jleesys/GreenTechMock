const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
})
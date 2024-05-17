var swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

  document.querySelector('.navigation__menu-button').addEventListener('click', function() {
    const menuLinks = document.querySelector('.navigation__menu-links');
    menuLinks.classList.toggle('active');

    const menubg = document.querySelector('.navigation__menu-back');
    menubg.classList.toggle('active');
   
    const button = this;
    if (button.src.includes('burger.svg')) {
       button.src = 'images/x.svg';
       document.body.style.overflow = "hidden"
    } else {
       button.src = 'images/burger.svg';
       document.body.style.overflow = ""
    }
    button.classList.toggle('active');
   });
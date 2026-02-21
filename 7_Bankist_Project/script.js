'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const sectino1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tab = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabContent = document.querySelectorAll('.operations__content');
const headerTitle = document.querySelector('.header__title')


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click',openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
btnScrollTo.addEventListener('click',(e)=>{
  const secCords = sectino1.getBoundingClientRect();
  console.log(secCords);

  console.log(e.target.getBoundingClientRect());

  console.log("Scroll (x/y) : ",window.pageXOffset,window.pageYOffset);
  console.log('height/width : ',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // window.scrollTo({
  //   left : secCords.left + window.pageXOffset,
  //   top : secCords.top + window.pageYOffset,
  //   behavior : 'smooth'});

    sectino1.scrollIntoView({behavior: 'smooth'}) // Support Only Modern Browsers;
});

document.querySelectorAll('.nav__link').forEach(
  function(el) {
    el.addEventListener('click',function(e) {
      e.preventDefault();
      const id = this.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    })
  }
)

//By Event Delegation
document.querySelector('.nav__links').addEventListener(
  'click',function(e) {
    e.preventDefault();
    
    if(e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      console.log(id);
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
    }
  }
)
//Tab Containers Implemetation;

tabContainer.addEventListener('click',function(e) {
  const clicked = e.target.closest('.operations__tab')

  if(!clicked) return;
  tab.forEach(t=>t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active')
  tabContent.forEach(t=>t.classList.remove('operations__content--active'));
  clicked.classList.add('operations__tab--active')
  document.querySelector(`.operations__content--${clicked.getAttribute('data-tab')}`)
  .classList.add('operations__content--active')

  console.log("TAB");
})

//Menu Fade Animations
const handleOver = function(e) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img')

    siblings.forEach(el=>{
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}
nav.addEventListener('mouseover',handleOver.bind(0.5));
nav.addEventListener('mouseout',handleOver.bind(1));

//Scroll Event
const InitialCords = headerTitle.getBoundingClientRect();

window.addEventListener('scroll',function(e) {
  if(this.window.scrollY > InitialCords.top) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
})
const message = document.createElement('div')
message.classList.add('cookie-message');
message.innerHTML = 
  'We use cookied for improved functionality and analytics.<button class="btn btn--close-cookie">Got It!</button>';

const header = document.querySelector('.header')

// header.prepend(message);
header.append(message)
// header.before(message)
// header.after(message)
// header.append(message.cloneNode(true));
document.querySelector('.btn--close-cookie').addEventListener('click',() =>{
  // message.parentElement.removeChild(message); //old way
  message.remove() //new way
})
message.style.backgroundColor = '#37384d'
// message.style.margin = 0;message.style.padding = 0;message.style.position = 'relative';
message.style.width = '100%'
console.log(getComputedStyle(message).color);//directly it returns object.
message.style.height = Number.parseFloat(
  getComputedStyle(message).height,10
)  + 40 + 'px';
// getComputedStyle(body).margin = 0;
// getComputedStyle(body).padding = 0;
// document.documentElement.style.setProperty('--color-primary','red');

//Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src)
console.log(logo.className)

logo.alt = "Bankist Application IS this!!!"
logo.setAttribute('Company','Bankist')
console.log(logo.getAttribute('company'));
logo.setAttribute('designer','Super Mario')
console.log(logo.getAttribute('designer'))

let RenderNumber = 0;
const openAccountButton = document.querySelector('.btn--show-modal');
const alertingModel = function() {
  RenderNumber++;
  alert(`Wanna Open Bank Account ? ---> Render Number : ${RenderNumber}`)
}
// openAccountButton.addEventListener('mouseenter',alertingModel)
// openAccountButton.onmouseenter = alertingModel;

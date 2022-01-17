let hammenu = document.querySelector('.MenuArea >img');
let navareamenu = document.querySelector('.navareamenu');
let searchArea = document.querySelector('.searchArea');
let headerfixedcontainer = document.querySelector('.tobefixed');
let headerArea = document.querySelector('.headerSection');
let headersectioncontainer = document.querySelector('.headersectioncontainer');
let mainContainer = document.querySelector('.mainContainer');
let searchbutton = document.querySelector('.searchArea > img');
let searchinput = document.querySelector('.searchbox > input');
let searchContainer = document.querySelector('.searchcontainer');
let searchCloseItem = document.querySelector('.searchCloseItem');
let navmenuopen = false;
let isSearchBoxOpen = false;
//console.log(searchinput);

hammenu.addEventListener('click', function() {
  if (!navmenuopen) {
    navareamenu.classList.add('navareamenuHam');
    searchArea.style.opacity = '0';
    document.body.style.overflow = 'hidden';
    navmenuopen = true;
    hammenu.setAttribute('src', 'img/hamclose.svg');
    let hammenugsaptimeline = gsap.timeline();
    hammenugsaptimeline.
    fromTo('.navareamenuHam', {
      y: -200,
    }, {
      y: 0,
      duration: .5
    }).fromTo('.navareamenu >li', {
      autoAlpha: 0,
      x: -100,
      y: 0
    }, {
      autoAlpha: 1,
      x: 0,
      duration: .3,
      y: 0,
      stagger: .1
    }, '-=.4');
  } else if (navareamenu) {
    navareamenu.classList.remove('navareamenuHam');
    navmenuopen = false;
    hammenu.setAttribute('src', 'img/hammenu.svg');
    searchArea.style.opacity = '1';
    document.body.style.overflow = 'visible';
  }
});

/*
navareamenu.addEventListener('mouseleave', function() {
  navareamenu.classList.remove('navareamenuHam');
  navmenuopen = false;
  hammenu.setAttribute('src', 'img/hammenu.svg');
  searchArea.style.opacity = '1';
});*/

searchbutton.addEventListener('click', function() {
  searchContainer.style.display = 'flex';
  document.body.style.overflow = 'hidden';

  mainContainer.style.filter = 'blur(6px)';
  gsap.from('.searchbox', {
    x: 50,
    duration: .5
  });
  searchinput.focus();
});

searchCloseItem.addEventListener('click', function() {
  searchContainer.style.display = 'none';
  document.body.style.overflow = 'visible';
  mainContainer.style.filter = 'blur(0px)'
});
/*
let stickyheader = function(event, index) {
  let [theevent] = event;
  console.log(theevent);
  if (!theevent.isIntersecting) {
    headerfixedcontainer.classList.add('headerSectionFixed');
  } else if (theevent.isIntersecting) {
    headerfixedcontainer.classList.remove('headerSectionFixed');
  }
};
let headerobserver = new IntersectionObserver(stickyheader, {
  threshold: .1
});

headerobserver.observe(headersectioncontainer);
*/
/*************gsap codes***********/


let headerAnimation = gsap.timeline();
headerAnimation.
from('.logoArea > h1', {
    y: -100,
    duration: .7,
    autoAlpha: 0
  }).from('.navareamenu >li', {
    y: -100,
    duration: .7,
    stagger: .15,
    autoAlpha: 0
  }).from('.searchArea> img', {
    y: -100,
    duration: .7,
    autoAlpha: 0
  }, '<')
  .from('.sectionOne >h1', {
    y: 60,
    duration: .9,
    autoAlpha: 0
  }).from('.productCatalog', {
    y: 90,
    duration: .9,
    autoAlpha: 0
  }, '=-.5');

headerAnimation.pause();

function testing() {
  if (window.matchMedia("(min-width: 768px)").matches) {
    headerAnimation.play();
  } else {
    console.log(false);
  }
};

testing();

function testing2() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    headerAnimation.kill();
    let mobileheadertimeline = gsap.timeline();
    mobileheadertimeline
      .from('.MenuArea >img', {
        y: -100,
        duration: .7
      }).to('.logoArea > h1', {
        y: 0,
        duration: .5,
        autoAlpha: 1
      }).to('.searchArea >img', {
        y: 0,
        duration: .7,
        autoAlpha: 1
      }, '<').to('.sectionOne > h1', {
        y: 0,
        duration: .7,
        autoAlpha: 1
      }).to('.productCatalog', {
        y: 0,
        duration: .7,
        autoAlpha: 1
      }, '=-.4').from('.sectiononebuttonbox >button', {
        y: 50,
        duration: .7,
        autoAlpha: 0
      }, '=-.3');
  } else {
    console.log(false);
  }
};

testing2();
/*********IntersectionObserver ***********/
let section2textbox = document.querySelector('.sectionTwo > .textbox');
let section2imgbox = document.querySelector('.sectionTwo > .imgbox >.infobox');
let section4 = document.querySelector('.sectionFour');


let revelcontent = function(event, index) {
  let [theevent] = event;
  //console.log(theevent);
  if (theevent.isIntersecting) {
    gsap.from(theevent.target.children, {
      y: 100,
      duration: 1
    });
  }
};
let sectionobserver = new IntersectionObserver(revelcontent, {
  threshold: .10
});

sectionobserver.observe(section2textbox);
sectionobserver.observe(section2imgbox);
sectionobserver.observe(section4);
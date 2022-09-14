const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

document.querySelectorAll('.menu').forEach((n) => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    menu.classList.remove('active');
  })
);

// featured section
const speaker = [
  {
    image: 'images/p.jpg',
    name: 'Mahdia Naiebi',
    Job: 'Director of Google student club and',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum neque ipsa vero alias',
  },
  {
    image: 'images/speaker.jpg',
    name: 'john Smith',
    Job: 'Director of Google student club and',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum neque ipsa vero alias',
  },
  {
    image: 'images/speaker.jpg',
    name: 'Millad Qurban',
    Job: 'Director of Google student club and',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum neque ipsa vero alias',
  },
  {
    image: 'images/p.jpg',
    name: 'zuhal Hameed',
    Job: 'Director of Google student club and',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum neque ipsa vero alias',
  },
  {
    image: 'images/speaker.jpg',
    name: 'Mariam',
    Job: 'Director of Google student club and',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum neque ipsa vero alias',
  },
  {
    image: 'images/p.jpg',
    name: 'Mahdia Naieb',
    Job: 'Director of Google student club and',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto harum neque ipsa vero alias',
  },
];

const featured = document.querySelector('.featured');
for (let i = 0; i < speaker.length; i+=1) {
  featured.innerHTML = `
 <div class="mobile-sectio">
        <div class="contains">
        <div class="speaker">
          <img src="${speaker[i].image}" alt="" />
          </div>
          <div class="test">
          <h2 class="name">${speaker[i].name}</h2>
          <p class="job">${speaker[i].Job}</p>
          <p class="dec">
            ${speaker[i].description}
          </p>
        </div>
        </div>
        <div class="contains">
        <div class="speaker">
          <img src="${speaker[i].image}" alt="" />
          </div>
          <div class="test">
          <h2 class="name">${speaker[i].name}</h2>
          <p class="job">${speaker[i].Job}</p>
          <p class="dec">
           ${speaker[i].description}
          </p>
          </div>
          </div>
        </div>  
       <div class="desktop-section">
        <div class="contains">
        <div class="speaker">
          <img src="${speaker[i].image}" alt="" />
          </div>
          <div class="test">
          <h2 class="name">${speaker[i].name}</h2>
          <p class="job">${speaker[i].Job}</p>
          <p class="dec">
            ${speaker[i].description}
          </p>
        </div>
        </div>
        <div class="contains">
        <div class="speaker">
          <img src="${speaker[i].image}" alt="" />
          </div>
          <div class="test">
          <h2 class="name">${speaker[i].name}</h2>
          <p class="job">${speaker[i].Job}</p>
          <p class="dec">
           ${speaker[i].description}
          </p>
          </div>
          </div>
        </div>   
         <div class="desktop-section">
        <div class="contains">
        <div class="speaker">
          <img src="${speaker[i].image}" alt="" />
          </div>
          <div class="test">
          <h2 class="name">${speaker[i].name}</h2>
          <p class="job">${speaker[i].Job}</p>
          <p class="dec">
           ${speaker[i].description}
          </p>
        </div>
        </div>
        <div class="contains">
        <div class="speaker">
          <img src="${speaker[i].image}" alt="" />
          </div>
          <div class="test">
          <h2 class="name">${speaker[i].name}</h2>
          <p class="job">${speaker[i].Job}</p>
          <p class="dec">
            ${speaker[i].description}
          </p>
          </div>
          </div>
        </div>   
`;
}
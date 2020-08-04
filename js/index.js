const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//navBar
const navBar = document.querySelectorAll('nav a')
navBar[0].textContent='Services'
navBar[1].textContent='Product'
navBar[2].textContent='Vision'
navBar[3].textContent='Features'
navBar[4].textContent='About'
navBar[5].textContent='Contact'

//navBar adding
const nav = document.querySelector('nav')

const addNavBarLast = document.createElement('a')
addNavBarLast.textContent = 'Cool Stuff!'
addNavBarLast.style.color = 'green'
addNavBarLast.href = '#'
nav.appendChild(addNavBarLast)
const addNavBarFirst = document.createElement('a')
addNavBarFirst.textContent = 'Fun Games!'
addNavBarFirst.style.color = 'green'
addNavBarFirst.href = '#'
nav.prepend(addNavBarFirst)

//navBar color
navBar.forEach(cb => {
  cb.style.color = 'green';
});

//logo img
const logoImg = document.querySelector('header img')
logoImg.src = 'img/logo.png'

//cta text
let ctaText = document.querySelector('.cta-text h1')
let ctaFirst = document.createElement('p')
ctaFirst.textContent = 'Dom'
let ctaSecond = document.createElement('p')
ctaSecond.textContent = 'Is'
let ctaThird = document.createElement('p')
ctaThird.textContent = 'Awesome'

ctaText.appendChild(ctaFirst)
ctaText.appendChild(ctaSecond)
ctaText.appendChild(ctaThird)

//DOM IS AWESOME event listener
ctaText.addEventListener("mouseenter", () => {
  ctaText.style.transform = "scale(1.2)";
  ctaText.style.transition = "all 0.3s";
 })
 ctaText.addEventListener("mouseleave", () => {
   ctaText.style.transform = "scale(1)";
 })
 ctaText.addEventListener("click", () => {
  ctaText.style.transition = "color 0.5s";
  ctaText.style.color = "#e62739";
})

//cta button
const ctaButton = document.querySelector('.cta-text button')
ctaButton.textContent = 'Get Started'

//cta button event listener
ctaButton.addEventListener('click', () => {
  let topExtra = document.querySelector('.top-content .text-content')
  let gibberish = document.createElement('p')
  gibberish.textContent = 'Hi this is random gibberish I am trying to squeeze in. This is actually a lot harder than it looks. I thought I could just make this repeat over and over again but it seems like there are some steps you need to take for this to work.'
  let extraInfo = gibberish.cloneNode(true)
  topExtra.appendChild(extraInfo)
})

//cta image
const ctaImage = document.querySelector('.cta img')
ctaImage.setAttribute('src', siteContent["cta"]["img-src"])

//top content
const toph4 = document.querySelector('.top-content .text-content h4')
toph4.textContent = 'Features'
const topParagraph = document.querySelector('.top-content .text-content p')
topParagraph.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//middle img
const middleImg = document.querySelector('.main-content img')
middleImg.src = 'img/mid-page-accent.jpg'

//bottom content
const bottomHead = document.querySelectorAll('.bottom-content .text-content h4')
bottomHead[0].textContent = 'Services'
bottomHead[1].textContent = 'Product'
bottomHead[2].textContent = 'Vision'

const bottomParagraph = document.querySelectorAll('.bottom-content .text-content p')
bottomParagraph[0].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomParagraph[1].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
bottomParagraph[2].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

//contact
const contacth4 = document.querySelector('.contact h4')
contacth4.textContent = 'Contact'

const contactParagraph = document.querySelectorAll('.contact p')

contactParagraph[0].textContent = '123 Way 456 Street Somewhere, USA'
contactParagraph[1].textContent = '1 (888) 888-8888'
contactParagraph[2].textContent = 'sales@greatidea.io'

//footer
const footer = document.querySelector('footer p')
footer.textContent = 'Copyright Great Idea! 2018'
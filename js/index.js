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
const navItem = document.getElementsByTagName('a')
    navItem[0].textContent = 'Services'

const navItem1 = document.getElementsByTagName('a')
    navItem[1].textContent = 'Products'

const navItem2 = document.getElementsByTagName('a')
    navItem[2].textContent = 'Vision'

const navItem3 = document.getElementsByTagName('a')
    navItem[3].textContent = 'Features'

const navItem4 = document.getElementsByTagName('a')
    navItem[4].textContent = 'About'

const navItem5 = document.getElementsByTagName('a')
    navItem[5].textContent = 'Contact'

const addText = document.querySelector('.cta-text h1')
addText.textContent = 'DOM Is Awesome'

const addText2 = document.querySelector('.cta-text button')
addText2.textContent = 'Get Started'

const addImg = document.getElementById('cta-img')
 addImg.src = "img/header-img.png"

 const h4 = document.querySelector('.text-content h4')
 h4.textContent = 'Features'

 const p = document.querySelector('.text-content p')
 p.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

 const h42 = document.getElementsByTagName('h4')[1]
 h42.textContent = 'About'

 const p2 = document.getElementsByTagName('p')[1]
 p2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

 const addImg2 = document.getElementById("middle-img")
 addImg2.src = 'img/mid-page-accent.jpg'

 const h43 = document.getElementsByTagName('h4')[2]
 h43.textContent = 'Services'

 const p3 = document.getElementsByTagName('p')[2]
 p3.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const h44 = document.getElementsByTagName('h4')[3]
 h44.textContent = 'Products'

 const p4 = document.getElementsByTagName('p')[3]
 p4.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

 const h45 = document.getElementsByTagName('h4')[4]
 h45.textContent = 'Vision'
 
 const p5 = document.getElementsByTagName('p')[4]
 p5.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'

const textColor = document.querySelector('nav')
textColor.style.color = 'green'

const h46 = document.getElementsByTagName('h4')[5]
 h46.textContent = 'Contact'

 const p6 = document.getElementsByTagName('p')[5]
 p6.textContent = '123 Way 456 Street Somewhere, USA'

 const p7 = document.getElementsByTagName('p')[6]
 p7.textContent = '1 (888) 888-8888'
 
 const p8 = document.getElementsByTagName('p')[7]
 p8.textContent = 'sales@greatidea.io'

 const foot = document.querySelector('footer p')
 foot.textContent = 'Copyright Great Idea! 2018'
 
 const newItem = document.querySelector('nav')
 newItem.prepend(' Cookies ')

 const newItem1 = document.querySelector('nav')
 newItem1.append(' Pizza ')
 





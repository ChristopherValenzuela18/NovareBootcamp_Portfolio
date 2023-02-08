const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const htmlContent = `<img class="x-menu" src="images/Icon-Cancel.svg" alt="cancel image">
<ul class="menu-list-item">
<li class="about"><a class="menu-list-items" href="#about">About</a></li>
  <li class="portfolio"><a class="menu-list-items" href="#portfolio">Project</a></li>
  
  <li class="contact"><a class="menu-list-items" href="#contact">Contact</a></li>
</ul>`;

menuDiv.innerHTML = htmlContent;
body.appendChild(menuDiv);
const cancelImage = menuDiv.querySelector('img');
cancelImage.className = 'x-menu';
cancelImage.src = 'images/Icon-Cancel.svg';
cancelImage.alt = 'cancel image';

const menuIcon = document.querySelector('.menu');
menuIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  document.getElementById('header').style.filter = 'blur(0.3125rem)';
});

cancelImage.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.getElementById('header').style.filter = 'none';
});

const itemLists = document.querySelectorAll('.menu-list-items');
itemLists.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.getElementById('header').style.filter = 'none';
  });
});

const myProjects = [

  {
    name: 'Android Silogan App',
    description: `The Alabang Cheezy Silogan is still using the outmoded form of payments that needs an improvement in terms of the payment system. Therefore, applying the new trend, of the cashless based transaction is now the focus of the research. The idea is based on the new normal brought by the pandemic. The researchers also focus on the technology that will be used by the users, and that is the mobile phone. The phone is easy to use and versatile, its ecurity and efficiency are the main purpose of the system electronic payment. The researchers prioritize the technology that will be used in the proposed system and that is the Gcash mode of payment. The electronic payment is well known for its efficiency and security that the system provides also, the electronic payment system will make difference in terms of management because it provides a history even in a small amount of payment. It will also help track the sales. The store is still using the outmoded traditional cash-based transaction that gives and idea for the researchers to develop an effective and secure cashless transaction. By the use of the mobile phone, the users can sustain its need to order/reserve and pay thru the proposed cashless transaction system.`, 
    featuredImage: './imageses/silog.png',
    technology: ['Java', 'Firebase', 'Android Studio', 'Github', 'View Binding'],
    liveVersion: 'https://github.com/ChristopherValenzuela18/Android-Silogan-App',
    sourceCode: 'https://github.com/ChristopherValenzuela18/Android-Silogan-App',
  },

  {
    name: 'Android Bank Account App',
    description: `login and dashboard with push notificartion bank app using MVVM architecture. for the backend Api postman to get credentials of user and to access the data stored int their account and for push notfication i use firebase for that..`,
    featuredImage: './imageses/bank.png',
    technology: ['Kotlin', 'MVVM', 'API', 'github', 'XML', 'Postman'],
    liveVersion: 'https://github.com/ChristopherValenzuela18/login-dashboard-bank-app',
    sourceCode: 'https://github.com/ChristopherValenzuela18/login-dashboard-bank-app',
  },

  {
    name: 'Kafe UI Design',
    description: 'UI/UX Web application for coffee shop that i created that contains about the coffee shop, kafe popular menu and their price, and Read some latest blog and news.',
    featuredImage: './imageses/web proj.png',
    technology: ['html5', 'css3', 'javascript', 'github'],
    liveVersion: 'https://christophervalenzuela18.github.io/kafe-UI/',
    sourceCode: 'https://github.com/ChristopherValenzuela18/ChristopherValenzuela18.github.io/tree/main/kafe-UI',
  },

  {
    name: 'Personal Portfolio',
    description: 'A personal Portfolio that i created.',
    featuredImage: './imageses/portfolio.png',
    technology: ['html5', 'css3', 'javascript', 'github'],
    liveVersion: 'https://christophervalenzuela18.github.io/PORTFOLIO/',
    sourceCode: 'https://github.com/ChristopherValenzuela18/ChristopherValenzuela18.github.io/tree/main/PORTFOLIO',
  },

];

const seeProjectBtn = document.querySelectorAll('.see-project');
seeProjectBtn.forEach((item, i) => {
  item.addEventListener('click', () => {
    const project = myProjects[i];
    const modalMenu = document.querySelector('.modal-container');
    const projectTitle = modalMenu.querySelector('.modal-card-title');
    projectTitle.textContent = project.name;
    const projectDesc = modalMenu.querySelectorAll('.modal-primary-text');
    const [mobileDesc, desktopDesc] = projectDesc;
    mobileDesc.textContent = project.description;
    desktopDesc.textContent = project.description;
    projectDesc.textContent = project.description;
    const projectMobileImage = modalMenu.querySelector('.mobile-image');
    projectMobileImage.src = project.featuredImage;
    const projectDesktopImage = modalMenu.querySelector('.desktop-image');
    projectDesktopImage.src = project.featuredImage;
    const liveLink = document.querySelector('.live-link');
    liveLink.href = project.liveVersion;
    const liveSourceCode = document.querySelector('.source-code');
    liveSourceCode.href = project.sourceCode;
    const allTech = document.querySelectorAll('.modal-tag');
    allTech.forEach((item, i) => {
      item.textContent = project.technology[i];
    });

    modalMenu.style.display = 'flex';
  });
});

const modalCancelBtn = document.querySelector('.modal-cancel-image');
modalCancelBtn.addEventListener('click', () => {
  const removeModalContainer = document.querySelector('.modal-container');
  removeModalContainer.style.display = 'none';
});

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const errorMessage = document.querySelector('.error-message');

form.addEventListener('submit', (e) => {
  if (emailInput.value.toLowerCase() !== emailInput.value) {
    e.preventDefault();
    errorMessage.style.cssText = 'color: black; background: white; border-radius: 1px solid black';
    errorMessage.textContent = 'Please, use lowercase letters for your email address';
  } else {
    errorMessage.style.display = 'none';
  }
});

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
            // Firefox
            || e.code === 1014
            // test name field too, because code might not be present
            // everything except Firefox
            || e.name === 'QuotaExceededError'
            // Firefox
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            // acknowledge QuotaExceededError only if there's something already stored
            && (storage && storage.length !== 0);
  }
}

if (storageAvailable('localStorage')) {
  let formDetails = { name: '', email: '', message: '' };
  if (window.localStorage.getItem('profile')) {
    const getProfile = window.localStorage.getItem('profile');
    formDetails = JSON.parse(getProfile);
    form.username.value = formDetails.name;
    form.email.value = formDetails.email;
    form.message.value = formDetails.message;
  }

  form.addEventListener('input', () => {
    formDetails.name = form.username.value;
    formDetails.email = form.email.value;
    formDetails.message = form.message.value;
    window.localStorage.setItem('profile', JSON.stringify(formDetails));
  });
}

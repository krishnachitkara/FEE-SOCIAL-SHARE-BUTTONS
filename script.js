const searchInput = document.getElementById('searchInput');
const shareButtons = document.getElementsByClassName('share-button');

    searchInput.addEventListener('input', function() {
      const searchQuery = this.value.toLowerCase();

      for (let i = 0; i < shareButtons.length; i++) {
        const buttonIcon = shareButtons[i].firstElementChild;
        const iconName = buttonIcon.getAttribute('class');

        if (iconName.includes(searchQuery)) {
          shareButtons[i].style.display = 'inline-block';
        } else {
          shareButtons[i].style.display = 'none';
        }
      }
    });

    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('about-link');
    const contactLink = document.getElementById('contact-link');
    const projectLink = document.getElementById('project-link');
    
    const homePage = document.getElementById('home-page');
    const aboutPage = document.getElementById('about-page');
    const contactPage = document.getElementById('contact-page');
    const projectPage = document.getElementById('project-page');
    
    homeLink.addEventListener('click', () => {
      showPage(homePage);
    });
    
    aboutLink.addEventListener('click', () => {
      showPage(aboutPage);
    });
    
    contactLink.addEventListener('click', () => {
      showPage(contactPage);
    });
    
    projectLink.addEventListener('click', () => {
      showPage(projectPage);
    });
    
    function showPage(page) {
      const pages = document.getElementsByClassName('page');
      for (let i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
      }
      page.classList.add('active');
    }
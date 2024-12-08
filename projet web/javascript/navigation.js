document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', function () {
        document.querySelector('a.active')?.classList.remove('active');
        this.classList.add('active');
      });
    });
  });
  // const sideNavbar = document.querySelector('.side-navbar');
  // const body = document.body;

  // document.addEventListener('keydown', (e) => {
  //   if (e.key === 's') { // Appuyez sur "S" pour afficher/masquer
  //     sideNavbar.classList.toggle('hidden');
  //     body.classList.toggle('side-navbar-hidden');
  //   }
  // });
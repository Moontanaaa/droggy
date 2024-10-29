import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private lastScrollY = 0;

  @HostListener('window:scroll', [])
onWindowScroll() {
  const navbar = document.querySelector('nav');
  const currentScrollY = window.pageYOffset;

  // Vérifiez si vous êtes à moins de 125 pixels du haut de la page
  const threshold = 125;

  if (currentScrollY > this.lastScrollY) {
    navbar?.classList.add('hidden'); // Masquer la navbar en descendant
  } 

  // Montrer la navbar si vous êtes presque en haut
  if (currentScrollY < threshold) {
    navbar?.classList.remove('hidden'); // Afficher la navbar
  }

  this.lastScrollY = currentScrollY;
}



  collapseMenu() {
    const navbarCollapse = document.querySelector('#navbarNav') as HTMLElement;
    const burgerButton = document.querySelector('.navbar-toggler') as HTMLElement;

    // Vérifie si la fenêtre est en mode mobile
    if (window.innerWidth < 1000) {
      navbarCollapse.classList.remove('show'); // Ferme le menu
      burgerButton.classList.add('collapsed'); // Simule la fermeture du bouton burger
      burgerButton.setAttribute('aria-expanded', 'false'); // Met à jour l'état aria
    }
  }

}

import { Component , HostListener } from '@angular/core';

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

    if (currentScrollY > this.lastScrollY) {
      navbar?.classList.add('hidden'); // Masquer la navbar en descendant
    } else {
      navbar?.classList.remove('hidden'); // Afficher la navbar en remontant
    }

    this.lastScrollY = currentScrollY;
  }
}

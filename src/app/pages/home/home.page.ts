import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  darkTheme: boolean = false;

  constructor(private router: Router) {}

  switchTheme() {
    this.darkTheme = !this.darkTheme;
  }

  goToAboutPage() {
    this.router.navigate(['about']);
  }
}

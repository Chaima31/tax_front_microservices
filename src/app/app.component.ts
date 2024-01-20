import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tax_front'; // Add the title property

  displayNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    // Subscribe to router events to dynamically update the displayNavbar property
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateDisplayNavbar(event.url);
    });
  }

  private updateDisplayNavbar(currentRoute: string): void {
    // Update the displayNavbar property based on the current route
    this.displayNavbar = !currentRoute.includes('/authentif');
  }
}

import { Component } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { ServicesService } from "./services/services.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Products-App';
  // constructor(private router: Router, private servicesService: ServicesService) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       this.servicesService.isVisible = this.servicesService.shouldShowFooter(event.url);
  //     }
  //   });
  // }
}

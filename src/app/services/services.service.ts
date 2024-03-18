import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private hideFooterOnRoutes: string[] = ['/login', '/register'];
  isVisible: boolean = true;
  constructor() { }
  shouldShowFooter(route: string): boolean {
    return !this.hideFooterOnRoutes.includes(route);
  }
}

import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Estadisticas',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'Registrar Usuario',  icon:'person', class: '' },
    { path: '/table-list', title: 'Usuarios',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Regitrar curso',  icon:'library_books', class: '' },
    { path: '/icons', title: 'Información de los cursos',  icon:'bubble_chart', class: '' },
    { path: '/maps', title: 'Asistencia',  icon:'location_on', class: '' },
];


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

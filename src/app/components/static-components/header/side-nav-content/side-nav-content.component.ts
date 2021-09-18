import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-side-nav-content',
  templateUrl: './side-nav-content.component.html',
  styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent implements OnInit {
  navItems = [
    { label: 'Хімчистка', route: '/home'},
    { label: 'Аквачистка', route: '/home'},
    { label: 'Прасування', route: '/home'},
    { label: 'Ремонт одягу', route: '/home'},
    { label: 'Де нас знайти', route: '/home'},
    { label: 'Інше', route: '/faq'},
  ];

  @Input() isMobile: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // console.log('isMobile', this.isMobile)
  }

  onNavigationSelection(navItem: any) {
    this.router.navigate([navItem.route]);
  }

}

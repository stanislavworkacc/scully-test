import {Component, HostListener, Input, OnInit} from '@angular/core';
import {NavigationService} from "../../../core/services/navigation.service";
import {DetectDeviceService} from "../../../core/services/detect-device.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isCurrentDeviceMobile: boolean = false;
  public width: any = window.innerWidth;

  @Input() _editable: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.width = window.innerWidth;
    this.isCurrentDeviceMobile = this.detectDeviceService.isCurrentDeviceMobile();
  }

  constructor(private navService: NavigationService, public detectDeviceService: DetectDeviceService) { }

  ngOnInit(): void {
    this.isCurrentDeviceMobile = this.detectDeviceService.isCurrentDeviceMobile();
  }

  toggleSideNav() {
    this.navService.setShowNav(true);
  }

}

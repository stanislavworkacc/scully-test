import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DetectDeviceService {

  constructor() { }

  isCurrentDeviceMobile(): any {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    } else {
      return false;
      // код для обычных устройств
    }
  }

  sideBarRules(innerWidth: number, isMobile: boolean): boolean {
    if(innerWidth <= 768) {
      return true
    } else {
      return isMobile;
    }
  }
}

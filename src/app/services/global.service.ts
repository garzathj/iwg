import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {

  public asr = 'https://iwg-cdn-cmaahygtd0abcsdt.z01.azurefd.net/iwgcontainer/';
  private cdn: string = 'https://iwg-cdn-cmaahygtd0abcsdt.z01.azurefd.net/iwgcontainer/';
  private blob: string = 'https://iwgstorage.blob.core.windows.net/iwgcontainer/';
  public bannerBackground: string = 'https://iwgstorage.blob.core.windows.net/iwgcontainer/hollowKnightBanner_cut2.png';
  public bcps3 = '#4a53ff';
  public bcps4 = '#4a53ff';
  public bcps5 = '#4a53ff';
  public bcpsvita = '#4a53ff';
  public bcnintendoswitch = '#2596ff';
  public bcsupernintendo = '#eb2023';

  constructor() {
    this.setAzureStorageRoute();
  }

  setAzureStorageRoute() {
    if (1 === 1) {
      this.asr = this.cdn;
    } else {
      this.asr = this.blob;
    }
  }
}

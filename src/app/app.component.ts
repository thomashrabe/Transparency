import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

import {
    AppTrackingTransparencyPlugin,
    AppTrackingStatusResponse,
  } from 'capacitor-plugin-app-tracking-transparency';
  
// eslint-disable-next-line @typescript-eslint/naming-convention
const AppTrackingTransparency = Plugins.AppTrackingTransparency as AppTrackingTransparencyPlugin;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

    this.transparency();
  }

  public async requestPermission(): Promise<AppTrackingStatusResponse> {
    const response = await AppTrackingTransparency.requestPermission();
  
    console.log(response);
    // { status: 'authorized' } for example
  
    return response;
  }

  async transparency(){
    this.requestPermission().then(
        (transparencyResult) => {
            console.log("");
            console.log(transparencyResult);
            console.log("");
        });
  }

}

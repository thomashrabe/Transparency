import { Component } from '@angular/core';
import { AppTrackingTransparency, AppTrackingStatusResponse} from 'capacitor-plugin-app-tracking-transparency';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {

    this.transparency();
  }

  async transparency(){
    const transparencyResult = await AppTrackingTransparency.requestPermission();
    console.log("");
    console.log(transparencyResult);
    console.log("");
  }

}

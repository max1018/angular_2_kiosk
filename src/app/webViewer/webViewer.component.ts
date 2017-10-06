import {Component} from '@angular/core';
import {onScreenKeyboard} from 'angular-on-screen-keyboard';


@Component({
  selector: 'app-web',
  templateUrl: 'webViewer.component.html' ,
  styleUrls: ['webViewer.component.css'],
})

export class WebviewerComponent {
  iframe: any;
  url: any = 'https://www.google.com';
  nextUrl: string;
  urlIndex: any = 0;
  urlArr: any = [{url: 'https://google.com'}];
  constructor() {  }
  onGo() {
      console.log(this.nextUrl)
      const header1 = this.nextUrl.substring(0, 5)
      const header2 = this.nextUrl.substring(0, 4)
      const header3 = this.nextUrl.substring(0, 3)

      if ('https' === header1 || 'http' === header2 || 'www' === header3) {
        this.url = this.nextUrl;
        this.urlArr.push({url: this.url})
        this.urlIndex++;
      }
      else {
        this.url = 'https://www.google.com/search?source=hp&q=' + this.nextUrl;
        this.urlArr.push({url: this.url})
        this.urlIndex++;
      }
    console.log(this.urlArr)
  }

  goBack() {
    this.urlIndex = this.urlIndex - 1
    this.url = this.urlArr[this.urlIndex].url
  }

  goForward() {
    this.urlIndex = this.urlIndex + 1
    this.url = this.urlArr[this.urlIndex].url
  }

}

import {Component} from '@angular/core';


@Component({
  selector: 'app-web',
  templateUrl: 'webViewer.component.html' ,
  styleUrls: ['webViewer.component.css'],

})

export class WebviewerComponent {
  iframe: any;
  //console.log(iframe);
//  url = "Max";
//
//   getData = function(data?) {
//     if (data && data.query && data.query.results && data.query.results.resources && data.query.results.resources.content && data.query.results.resources.status === 200)
//     {
//       this.loadHTML(data.query.results.resources.content)}
//     else if (data && data.error && data.error.description) { this.loadHTML(data.error.description)}
//     else {this.loadHTML('Error: Cannot load ' + this.url)};
//   };
//   loadURL(src) {
//   this.url = src;
//   let script = document.createElement('script');
//   script.src = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20data.headers%20where%20url%3D%22' + encodeURIComponent(this.url) + '%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=>  ';
//   document.body.appendChild(script);
// };
//
//   loadHTML (html) {
//   this.iframe.src = 'about:blank';
//   this.iframe.contentWindow.document.open();
//   this.iframe.contentWindow.document.write(html.replace(/<head>/i, '<head><base href="' + this.url + '"><scr' + 'ipt>document.addEventListener("click", function(e) { if(e.target && e.target.nodeName == "A") { e.preventDefault(); parent.loadURL(e.target.href); } });</scr' + 'ipt>'));
//   this.iframe.contentWindow.document.close();
// }
//
//  getID(){
//  this.loadURL('google.com')
// }

  constructor() {

  }
}

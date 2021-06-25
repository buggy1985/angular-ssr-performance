import { Component, OnInit } from '@angular/core';

// with the following line, it doesn't even compile
// import { performance } from 'perf_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ssr-demo';

  ngOnInit() {
    console.log('lets see if it works in app.component.ts too');
    console.log('performance.now() is working here too => ', performance.now());
  }

}

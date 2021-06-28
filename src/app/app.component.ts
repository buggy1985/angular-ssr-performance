import { Component, Inject, OnInit } from '@angular/core';
import { PERFORMANCE_API } from './app.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-ssr-demo';

  constructor(
    @Inject(PERFORMANCE_API) private performance: any
  ) {}


  ngOnInit() {
    console.log('lets see if it works in app.component.ts too');
    console.log('performance.now() is working here too => ', this.performance.now());
  }

}

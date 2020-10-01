import { Component, OnInit } from '@angular/core';
import * as fromSettings from './../../../app.settings';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  appName: string = fromSettings.APP_NAME;

  constructor() {
  }

  ngOnInit() {
  }
}

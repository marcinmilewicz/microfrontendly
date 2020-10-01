import { Component, OnInit } from '@angular/core';
import * as fromSettings from '../../../app.settings';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  appName: string = fromSettings.APP_NAME;

  constructor() {
  }

  ngOnInit() {
  }
}

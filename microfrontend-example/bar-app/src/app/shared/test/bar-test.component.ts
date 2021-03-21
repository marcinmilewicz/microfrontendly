import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-test-container',
  templateUrl: './bar-test.component.html',
  styleUrls: ['./bar-test.component.css'],
})
export class BarTestComponent {
  @Input() appName: string;
  @Input() moduleName: string;
}

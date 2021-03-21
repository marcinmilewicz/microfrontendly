import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo-test-container',
  templateUrl: './foo-test.component.html',
  styleUrls: ['./foo-test.component.css'],
})
export class FooTestComponent implements OnInit {
  @Input() appName: string;
  @Input() moduleName: string;

  constructor() {}

  ngOnInit() {}
}

/**
 * * Title: gpa.component.ts
 * Author: Larry Ohaka
 * Date: 6/25/21
 * Description: Navigation and Layout
 */

 import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css'],
})
export class GpaComponent implements OnInit {
  //@ts-ignore
  @Input() gpaTotal: number;
  constructor() {}

  ngOnInit(): void {}
}

/**
 * * Title: grade-summary.component.ts
 * Author: Larry Ohaka
 * Date: 7/3/21
 * Description: Input Properties
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grade-summary',
  templateUrl: './grade-summary.component.html',
  styleUrls: ['./grade-summary.component.css'],
})
export class GradeSummaryComponent implements OnInit {
  //@ts-ignore
  @Input() grade: string;
  //@ts-ignore
  @Input() course: string;

  constructor() {}

  ngOnInit(): void {}
}

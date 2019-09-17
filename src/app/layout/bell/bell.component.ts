import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bell',
  templateUrl: './bell.component.html',
  styleUrls: ['./bell.component.scss']
})
export class BellComponent implements OnInit {
  @Input() count: number;
  @Input() icon: string;
  constructor() { }

  ngOnInit() {
  }

}

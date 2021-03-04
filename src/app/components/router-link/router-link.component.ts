import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'router-link',
  templateUrl: './router-link.component.html',
  styleUrls: ['./router-link.component.css']
})
export class RouterLinkComponent implements OnInit {

  @Input() title: string
  
  @Input() path: string

  constructor() { }

  ngOnInit(): void {
  }

}

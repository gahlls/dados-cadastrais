import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'resgate',
  templateUrl: './resgate.component.html',
  styleUrls: ['./resgate.component.css']
})
export class ResgateComponent implements OnInit {

  simuladorIsOpen = true
  resgateIsOpen = false 

  constructor() { }

  ngOnInit(): void {
  }

}

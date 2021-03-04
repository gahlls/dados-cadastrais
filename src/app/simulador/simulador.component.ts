import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'simulador',
  templateUrl: './simulador.component.html',
  styleUrls: ['./simulador.component.css']
})
export class SimuladorComponent implements OnInit {

  isOpen = true
  isResultadosOpen = false 

  constructor() { }

  ngOnInit(): void {
  }

}

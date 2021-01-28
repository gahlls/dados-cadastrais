import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-propostas',
  templateUrl: './dados-propostas.component.html',
  styleUrls: ['./dados-propostas.component.css']
})
export class DadosPropostasComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

}

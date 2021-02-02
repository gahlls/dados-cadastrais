import { Component, OnInit } from '@angular/core';

import { Proposta } from './proposta.model'

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})
export class PropostaComponent implements OnInit {

  propostas: Proposta[] = [
    {
      codigo: "1",
      tipo: "CVP",
      nome: "Individual VGBL",
      titular: "Rodrigo Glauco",
      cep: "1010-000",
      data: "20.01.2020",
      opened: false
    },
    {
      codigo: "2",
      tipo: "CVP",
      nome: "Individual VGBL",
      titular: "Rodrigo Glauco",
      cep: "1010-000",
      data: "20.01.2020",
      opened: false
    },
    {
      codigo: "3",
      tipo: "CVP",
      nome: "Individual VGBL",
      titular: "Rodrigo Glauco",
      cep: "1010-000",
      data: "20.01.2020",
      opened: false
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}

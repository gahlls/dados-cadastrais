import { Component, OnInit } from '@angular/core';

import { Proposta } from './proposta/proposta.model'
import { PropostasService } from './propostas.service'

@Component({
  selector: 'propostas',
  templateUrl: './propostas.component.html',
  styleUrls: ['./propostas.component.css']
})
export class PropostasComponent implements OnInit {

  propostas: Proposta[]

  constructor(private propostasService: PropostasService) { }

  ngOnInit(): void {
    this.propostas = this.propostasService.getAll()
  }
}

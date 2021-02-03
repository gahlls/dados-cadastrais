import { Component, OnInit, Input } from '@angular/core';

import { Proposta } from './proposta.model'

@Component({
  selector: 'app-proposta',
  templateUrl: './proposta.component.html',
  styleUrls: ['./proposta.component.css']
})
export class PropostaComponent implements OnInit {

  @Input() proposta: Proposta

  constructor() { }

  ngOnInit(): void {
  }
}

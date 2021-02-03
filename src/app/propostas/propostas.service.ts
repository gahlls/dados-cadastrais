import { Injectable } from '@angular/core'
// import { Http } from '@angular/http'

// import { Observable } from 'rxjs/Observable'
// import 'rxjs/add/operator/map'
// import 'rxjs/add/operator/catch'

import { Proposta } from './proposta/proposta.model'


// @Injectable()
export class PropostasService {

    propostas: Proposta[] = [
        {
          codigo: "80000440",
          tipo: "CVP",
          nome: "Individual VGBL",
          titular: "Rodrigo Glauco",
          cep: "1010-000",
          dataInicio: "20.01.2020",
          dataAlteracao: "20.01.2020",
          opened: false
        },
        {
          codigo: "80000440",
          tipo: "CVP",
          nome: "Individual VGBL",
          titular: "Rodrigo Glauco",
          cep: "1010-000",
          dataInicio: "20.01.2020",
          dataAlteracao: "20.01.2020",
          opened: false
        },
        {
          codigo: "80000440",
          tipo: "CVP",
          nome: "Individual VGBL",
          titular: "Rodrigo Glauco",
          cep: "1010-000",
          dataInicio: "20.01.2020",
          dataAlteracao: "20.01.2020",
          opened: false
        },   
    ]

    constructor() {}

    getAll(): Proposta[] {
       return this.propostas
    }
}
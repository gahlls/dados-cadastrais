import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-proposta-detail',
  templateUrl: './proposta-detail.component.html',
  styleUrls: ['./proposta-detail.component.css']
})
export class PropostaDetailComponent implements OnInit {

  cep = new FormControl('');
  logradouro = new FormControl('')
  cidade = new FormControl('');

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  filterCep(): void {
    this.http.get<any>(`https://viacep.com.br/ws/${this.cep.value}/json/`,
    {observe: 'response', responseType: 'json'})
    .subscribe(resp => {
      this.logradouro.setValue(resp.body.logradouro)
      this.cidade.setValue(resp.body.localidade)
    })
  }
}

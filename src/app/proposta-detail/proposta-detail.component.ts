import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'proposta-detail',
  templateUrl: './proposta-detail.component.html',
  styleUrls: ['./proposta-detail.component.css']
})
export class PropostaDetailComponent implements OnInit {

  form: FormGroup = this.fb.group({
    dadosContato: this.fb.group({
      numero:  ['', Validators.required],
      email: ['', Validators.required ],
    }),
    dadosBancarios: this.fb.group({
      banco: ['', Validators.required],
      agencia:  ['', Validators.required],
      conta: ['', Validators.required],
    }),
    cep: ['',  Validators.required, ],
    logradouro: { value: '', disabled: true },
    cidade: { value: '', disabled: true },
    numero: { value: '', disabled: true },
  })

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  filterCep(): void {
    
    this.http.get<any>(`https://viacep.com.br/ws/${this.form.controls['cep'].value}/json/`,
    {observe: 'response', responseType: 'json'})
    .subscribe(resp => {
      this.form.controls['logradouro'].patchValue(resp.body.logradouro)
      this.form.controls['cidade'].patchValue(resp.body.localidade)
      this.form.enable()
    },
      error => {
        this.form.enable()
      }
    )
  }
}

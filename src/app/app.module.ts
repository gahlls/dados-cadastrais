import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input'; 
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatRadioModule } from '@angular/material/radio'
import { MatButtonModule } from '@angular/material/button'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { MatListModule } from '@angular/material/list'; 
import { MatSelectModule } from '@angular/material/select'; 
import { MatFormFieldModule } from '@angular/material/form-field';

import { DadosBasicosComponent } from './dados-basicos/dados-basicos.component';
import { PropostasComponent } from './propostas/propostas.component'
import { PerfilComponent } from './perfil/perfil.component';
import { ButtonFooterComponent } from './button-footer/button-footer.component';
import { RouterLinkComponent } from './router-link/router-link.component';
import { PropostaComponent } from './propostas/proposta/proposta.component';
import { PropostaDetailComponent } from './proposta-detail/proposta-detail.component';
import { MdExpasionPanelComponent } from './components/md-expasion-panel/md-expasion-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DadosBasicosComponent,
    PropostasComponent,
    PerfilComponent,
    ButtonFooterComponent,
    RouterLinkComponent,
    PropostaComponent,
    PropostaDetailComponent,
    MdExpasionPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatButtonModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

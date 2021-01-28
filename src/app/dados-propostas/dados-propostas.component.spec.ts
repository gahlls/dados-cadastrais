import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadosPropostasComponent } from './dados-propostas.component';

describe('DadosPropostasComponent', () => {
  let component: DadosPropostasComponent;
  let fixture: ComponentFixture<DadosPropostasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadosPropostasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosPropostasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

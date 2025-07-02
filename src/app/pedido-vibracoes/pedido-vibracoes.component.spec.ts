import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidoVibracoesComponent } from './pedido-vibracoes.component';

describe('PedidoVibracoesComponent', () => {
  let component: PedidoVibracoesComponent;
  let fixture: ComponentFixture<PedidoVibracoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PedidoVibracoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PedidoVibracoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

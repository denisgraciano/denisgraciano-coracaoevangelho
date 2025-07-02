import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroEspiritosComponent } from './livro-espiritos.component';

describe('LivroEspiritosComponent', () => {
  let component: LivroEspiritosComponent;
  let fixture: ComponentFixture<LivroEspiritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivroEspiritosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivroEspiritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObrasBasicasComponent } from './obras-basicas.component';

describe('ObrasBasicasComponent', () => {
  let component: ObrasBasicasComponent;
  let fixture: ComponentFixture<ObrasBasicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObrasBasicasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObrasBasicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByNumberComponent } from './search-by-number.component';

describe('SearchByNumberComponent', () => {
  let component: SearchByNumberComponent;
  let fixture: ComponentFixture<SearchByNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchByNumberComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchByNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

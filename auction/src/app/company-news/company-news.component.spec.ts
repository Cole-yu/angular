import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNEWSComponent } from './company-news.component';

describe('CompanyNEWSComponent', () => {
  let component: CompanyNEWSComponent;
  let fixture: ComponentFixture<CompanyNEWSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyNEWSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNEWSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

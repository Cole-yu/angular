import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUploadComponent } from './my-upload.component';

describe('MyUploadComponent', () => {
  let component: MyUploadComponent;
  let fixture: ComponentFixture<MyUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

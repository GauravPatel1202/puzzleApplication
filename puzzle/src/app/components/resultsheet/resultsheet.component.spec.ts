import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsheetComponent } from './resultsheet.component';

describe('ResultsheetComponent', () => {
  let component: ResultsheetComponent;
  let fixture: ComponentFixture<ResultsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

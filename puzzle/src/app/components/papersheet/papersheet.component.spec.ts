import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PapersheetComponent } from './papersheet.component';

describe('PapersheetComponent', () => {
  let component: PapersheetComponent;
  let fixture: ComponentFixture<PapersheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PapersheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PapersheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

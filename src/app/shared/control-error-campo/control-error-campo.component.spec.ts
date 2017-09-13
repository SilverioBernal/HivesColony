import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlErrorCampoComponent } from './control-error-campo.component';

describe('ControlErrorCampoComponent', () => {
  let component: ControlErrorCampoComponent;
  let fixture: ComponentFixture<ControlErrorCampoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlErrorCampoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlErrorCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

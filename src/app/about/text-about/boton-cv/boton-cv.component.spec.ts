import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonCvComponent } from './boton-cv.component';

describe('BotonCvComponent', () => {
  let component: BotonCvComponent;
  let fixture: ComponentFixture<BotonCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonCvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

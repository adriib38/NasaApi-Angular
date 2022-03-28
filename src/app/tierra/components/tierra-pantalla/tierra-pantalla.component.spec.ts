import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierraPantallaComponent } from './tierra-pantalla.component';

describe('TierraPantallaComponent', () => {
  let component: TierraPantallaComponent;
  let fixture: ComponentFixture<TierraPantallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierraPantallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierraPantallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

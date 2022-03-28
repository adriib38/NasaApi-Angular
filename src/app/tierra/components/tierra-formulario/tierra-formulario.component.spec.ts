import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierraFormularioComponent } from './tierra-formulario.component';

describe('TierraFormularioComponent', () => {
  let component: TierraFormularioComponent;
  let fixture: ComponentFixture<TierraFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierraFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierraFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

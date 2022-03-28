import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TierraResultadoComponent } from './tierra-resultado.component';

describe('TierraResultadoComponent', () => {
  let component: TierraResultadoComponent;
  let fixture: ComponentFixture<TierraResultadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TierraResultadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TierraResultadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

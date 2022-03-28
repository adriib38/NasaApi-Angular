import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoDelDiaComponent } from './foto-del-dia.component';

describe('FotoDelDiaComponent', () => {
  let component: FotoDelDiaComponent;
  let fixture: ComponentFixture<FotoDelDiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FotoDelDiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoDelDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

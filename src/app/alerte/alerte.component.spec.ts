import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlerteComponent } from './alerte.component';

describe('AlerteComponent', () => {
  let component: AlerteComponent;
  let fixture: ComponentFixture<AlerteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlerteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlerteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

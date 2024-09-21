import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndermainComponent } from './undermain.component';

describe('UndermainComponent', () => {
  let component: UndermainComponent;
  let fixture: ComponentFixture<UndermainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UndermainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UndermainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

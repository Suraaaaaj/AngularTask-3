import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MspinnerComponent } from './mspinner.component';

describe('MspinnerComponent', () => {
  let component: MspinnerComponent;
  let fixture: ComponentFixture<MspinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MspinnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MspinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

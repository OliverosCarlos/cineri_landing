import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VwButton } from './vw-button';

describe('VwButton', () => {
  let component: VwButton;
  let fixture: ComponentFixture<VwButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VwButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VwButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

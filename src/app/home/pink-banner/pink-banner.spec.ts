import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinkBanner } from './pink-banner';

describe('PinkBanner', () => {
  let component: PinkBanner;
  let fixture: ComponentFixture<PinkBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PinkBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinkBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

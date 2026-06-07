import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameConsoleBanner } from './game-console-banner';

describe('GameConsoleBanner', () => {
  let component: GameConsoleBanner;
  let fixture: ComponentFixture<GameConsoleBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameConsoleBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameConsoleBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordspanelComponent } from './wordspanel.component';

describe('WordspanelComponent', () => {
  let component: WordspanelComponent;
  let fixture: ComponentFixture<WordspanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordspanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordspanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

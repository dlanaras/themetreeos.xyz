import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnekComponent } from './snek.component';

describe('SnekComponent', () => {
  let component: SnekComponent;
  let fixture: ComponentFixture<SnekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SnekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

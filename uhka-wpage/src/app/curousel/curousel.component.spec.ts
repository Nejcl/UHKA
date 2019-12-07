import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurouselComponent } from './curousel.component';

describe('CurouselComponent', () => {
  let component: CurouselComponent;
  let fixture: ComponentFixture<CurouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

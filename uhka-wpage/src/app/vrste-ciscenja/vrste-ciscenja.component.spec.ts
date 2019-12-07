import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VrsteCiscenjaComponent } from './vrste-ciscenja.component';

describe('VrsteCiscenjaComponent', () => {
  let component: VrsteCiscenjaComponent;
  let fixture: ComponentFixture<VrsteCiscenjaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VrsteCiscenjaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VrsteCiscenjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMapComponent } from './district-map.component';

describe('DistrictMapComponent', () => {
  let component: DistrictMapComponent;
  let fixture: ComponentFixture<DistrictMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DistrictMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

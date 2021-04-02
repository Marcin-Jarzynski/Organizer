import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutyComponent } from './nuty.component';

describe('NutyComponent', () => {
  let component: NutyComponent;
  let fixture: ComponentFixture<NutyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

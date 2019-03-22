import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoSearchsComponent } from './do-searchs.component';

describe('DoSearchsComponent', () => {
  let component: DoSearchsComponent;
  let fixture: ComponentFixture<DoSearchsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoSearchsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoSearchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

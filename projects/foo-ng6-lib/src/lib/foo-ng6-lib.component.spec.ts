import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooNg6LibComponent } from './foo-ng6-lib.component';

describe('FooNg6LibComponent', () => {
  let component: FooNg6LibComponent;
  let fixture: ComponentFixture<FooNg6LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooNg6LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooNg6LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

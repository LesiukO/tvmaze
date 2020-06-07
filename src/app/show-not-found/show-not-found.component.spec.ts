import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNotFoundComponent } from './show-not-found.component';

describe('ShowNotFoundComponent', () => {
  let component: ShowNotFoundComponent;
  let fixture: ComponentFixture<ShowNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

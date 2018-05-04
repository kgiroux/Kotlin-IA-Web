import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNeuroneComponent } from './page-neurone.component';

describe('PageNeuroneComponent', () => {
  let component: PageNeuroneComponent;
  let fixture: ComponentFixture<PageNeuroneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNeuroneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNeuroneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

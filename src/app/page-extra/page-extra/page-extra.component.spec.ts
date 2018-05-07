import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageExtraComponent } from './page-extra.component';

describe('PageExtraComponent', () => {
  let component: PageExtraComponent;
  let fixture: ComponentFixture<PageExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

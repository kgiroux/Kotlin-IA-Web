import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMlpComponent } from './page-mlp.component';

describe('PageMlpComponent', () => {
  let component: PageMlpComponent;
  let fixture: ComponentFixture<PageMlpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMlpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMlpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

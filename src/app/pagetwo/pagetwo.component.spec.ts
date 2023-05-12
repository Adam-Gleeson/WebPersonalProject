import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetwoComponent } from './pagetwo.component';

describe('PagetwoComponent', () => {
  let component: PagetwoComponent;
  let fixture: ComponentFixture<PagetwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagetwoComponent]
    });
    fixture = TestBed.createComponent(PagetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

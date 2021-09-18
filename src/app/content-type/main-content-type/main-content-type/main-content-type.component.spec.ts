import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentTypeComponent } from './main-content-type.component';

describe('MainContentTypeComponent', () => {
  let component: MainContentTypeComponent;
  let fixture: ComponentFixture<MainContentTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserCodedrivenComponent } from './adduser-codedriven.component';

describe('AdduserCodedrivenComponent', () => {
  let component: AdduserCodedrivenComponent;
  let fixture: ComponentFixture<AdduserCodedrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserCodedrivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdduserCodedrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

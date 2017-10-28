/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpendComponent } from './spend.component';

describe('SpendComponent', () => {
  let component: SpendComponent;
  let fixture: ComponentFixture<SpendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

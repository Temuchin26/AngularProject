/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComentsComponent } from './coments.component';

describe('ComentsComponent', () => {
  let component: ComentsComponent;
  let fixture: ComponentFixture<ComentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

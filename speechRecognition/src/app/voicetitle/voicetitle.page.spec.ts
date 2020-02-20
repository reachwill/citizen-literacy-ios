import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoicetitlePage } from './voicetitle.page';

describe('VoicetitlePage', () => {
  let component: VoicetitlePage;
  let fixture: ComponentFixture<VoicetitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoicetitlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoicetitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

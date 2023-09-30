import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReAddEntryComponent } from './re-add-entry.component';

describe('ReAddEntryComponent', () => {
  let component: ReAddEntryComponent;
  let fixture: ComponentFixture<ReAddEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReAddEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReAddEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogTaskOpenComponent } from './dialog-task-open.component';

describe('DialogTaskOpenComponent', () => {
  let component: DialogTaskOpenComponent;
  let fixture: ComponentFixture<DialogTaskOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogTaskOpenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogTaskOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

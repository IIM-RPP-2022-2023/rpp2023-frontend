import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorudzbinaDialogComponent } from './porudzbina-dialog.component';

describe('PorudzbinaDialogComponent', () => {
  let component: PorudzbinaDialogComponent;
  let fixture: ComponentFixture<PorudzbinaDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorudzbinaDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorudzbinaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

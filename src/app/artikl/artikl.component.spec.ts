import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtiklComponent } from './artikl.component';

describe('ArtiklComponent', () => {
  let component: ArtiklComponent;
  let fixture: ComponentFixture<ArtiklComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtiklComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtiklComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

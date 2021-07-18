import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolNewComponent } from './rol-new.component';

describe('RolNewComponent', () => {
  let component: RolNewComponent;
  let fixture: ComponentFixture<RolNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RolNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RolNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

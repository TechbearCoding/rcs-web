import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BearPictureComponent } from './bear-picture.component';

describe('BearPictureComponent', () => {
  let component: BearPictureComponent;
  let fixture: ComponentFixture<BearPictureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BearPictureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BearPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

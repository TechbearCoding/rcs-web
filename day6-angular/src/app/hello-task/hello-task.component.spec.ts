import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloTaskComponent } from './hello-task.component';

describe('HelloTaskComponent', () => {
  let component: HelloTaskComponent;
  let fixture: ComponentFixture<HelloTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelloTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

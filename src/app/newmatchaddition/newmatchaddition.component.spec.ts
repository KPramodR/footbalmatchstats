import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmatchadditionComponent } from './newmatchaddition.component';

describe('NewmatchadditionComponent', () => {
  let component: NewmatchadditionComponent;
  let fixture: ComponentFixture<NewmatchadditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmatchadditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewmatchadditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

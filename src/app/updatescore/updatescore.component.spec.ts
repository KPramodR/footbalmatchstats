import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatescoreComponent } from './updatescore.component';

describe('UpdatescoreComponent', () => {
  let component: UpdatescoreComponent;
  let fixture: ComponentFixture<UpdatescoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatescoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatescoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

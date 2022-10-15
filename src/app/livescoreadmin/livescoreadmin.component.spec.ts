import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivescoreadminComponent } from './livescoreadmin.component';

describe('LivescoreadminComponent', () => {
  let component: LivescoreadminComponent;
  let fixture: ComponentFixture<LivescoreadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivescoreadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivescoreadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryadminComponent } from './summaryadmin.component';

describe('SummaryadminComponent', () => {
  let component: SummaryadminComponent;
  let fixture: ComponentFixture<SummaryadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingSubjectsComponent } from './listing-subjects.component';

describe('ListingSubjectsComponent', () => {
  let component: ListingSubjectsComponent;
  let fixture: ComponentFixture<ListingSubjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingSubjectsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListingSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

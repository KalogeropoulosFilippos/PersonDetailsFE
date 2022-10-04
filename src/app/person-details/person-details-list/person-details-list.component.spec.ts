import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsListComponent } from './person-details-list.component';

describe('PersonDetailsListComponent', () => {
  let component: PersonDetailsListComponent;
  let fixture: ComponentFixture<PersonDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDetailsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

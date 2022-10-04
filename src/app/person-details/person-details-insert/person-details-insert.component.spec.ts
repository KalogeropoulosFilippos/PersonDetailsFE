import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonDetailsInsertComponent } from './person-details-insert.component';

describe('PersonDetailsInsertComponent', () => {
  let component: PersonDetailsInsertComponent;
  let fixture: ComponentFixture<PersonDetailsInsertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonDetailsInsertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonDetailsInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

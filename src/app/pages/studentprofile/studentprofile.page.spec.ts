import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentprofilePage } from './studentprofile.page';

describe('StudentprofilePage', () => {
  let component: StudentprofilePage;
  let fixture: ComponentFixture<StudentprofilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

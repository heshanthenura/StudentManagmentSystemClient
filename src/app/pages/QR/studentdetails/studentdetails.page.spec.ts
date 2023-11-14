import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentdetailsPage } from './studentdetails.page';

describe('StudentdetailsPage', () => {
  let component: StudentdetailsPage;
  let fixture: ComponentFixture<StudentdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(StudentdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

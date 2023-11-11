import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClassprofilePage } from './classprofile.page';

describe('ClassprofilePage', () => {
  let component: ClassprofilePage;
  let fixture: ComponentFixture<ClassprofilePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClassprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

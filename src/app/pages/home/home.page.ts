import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Student } from 'src/app/entities/Student';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  darkTheme: boolean = false;
  student!: Student;

  constructor(
    private router: Router,
    private dataService: DataService,
    private platform: Platform
  ) {}

  ionViewWillEnter() {
    console.log('Page loaded!');
  }

  testSevice() {
    this.dataService.getStudentByIndex('123/123456').subscribe({
      next: (student) => {
        this.student = student;
        console.log(student.name);
      },
      error: (error) => {
        console.error('Error fetching student data', error);
      },
      complete: () => {},
    });
  }

  goToViewDetails() {
    if (this.platform.is('desktop')) {
      alert('QR scanning working on mobile devices only');
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/studentdetails']);
    }
  }
}

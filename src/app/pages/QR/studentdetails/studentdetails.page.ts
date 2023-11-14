import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
import { Platform } from '@ionic/angular';
import { Student } from 'src/app/entities/Student';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-studentdetails',
  templateUrl: './studentdetails.page.html',
  styleUrls: ['./studentdetails.page.scss'],
})
export class StudentdetailsPage {
  isScanning: boolean = false;
  isFetchingData: boolean = false;
  student!: Student;
  errorMsg!: String;
  QRData_name!: string;
  QRData_index!: string;

  constructor(
    private platform: Platform,
    private router: Router,
    private dataService: DataService
  ) {}

  StartOrStop() {
    if (this.platform.is('desktop')) {
      this.router.navigate(['/home']);
    } else {
      if (this.isScanning) {
        this.stopScan();
      } else {
        this.startScan();
      }
    }
  }

  ionViewWillLeave() {
    this.stopScan();
  }

  ionViewWillEnter() {
    this.StartOrStop();
  }

  startScan = async () => {
    document.querySelector('body')?.classList.add('scanner-active');
    this.isScanning = true;
    await BarcodeScanner.checkPermission({ force: true });
    BarcodeScanner.hideBackground();
    const result = await BarcodeScanner.startScan();
    this.errorMsg = '';
    if (result.hasContent) {
      document.querySelector('body')?.classList.remove('scanner-active');
      BarcodeScanner.showBackground();
      this.isScanning = false;
      console.log(result.content);
      this.getStudentDetailsByIndex(result.content);
    }
  };

  stopScan = () => {
    document.querySelector('body')?.classList.remove('scanner-active');
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    this.isScanning = false;
  };

  getStudentDetailsByIndex(data: string) {
    let indexValue;
    try {
      const jsonData = JSON.parse(data);
      indexValue = jsonData.index;
      indexValue = indexValue.replace('-', '/');
      this.QRData_index = indexValue;
      this.QRData_name = jsonData.name;
      console.log('Modified Index Value:', indexValue);
      this.isFetchingData = true;
      this.dataService.getStudentByIndex(indexValue).subscribe({
        next: (student) => {
          this.student = student;
          console.log(student.name);
          console.log(student.index);
          console.log(student.school_id);
          console.log(student.index);
          console.log(student.school_index);
          console.log(student.dob);
          console.log(student.doa);

          this.isFetchingData = false;
        },
        error: (error) => {
          console.error('Error fetching student data', error);
          this.errorMsg = 'Unable to get full details';
          this.isFetchingData = false;
        },
        complete: () => {},
      });
    } catch (error) {
      console.error('Error parsing JSON:', error);
      this.errorMsg = 'Error Related to QRCode';
    }
  }
}

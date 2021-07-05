import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../enrollment.service';
import { User } from '../user';
import {HttpClientModule} from '@angular/common/http';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';
import * as alasql from 'alasql';
import * as XLSX from 'xlsx';




@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  user(user: any) {
    throw new Error('Method not implemented.');
  }
  topics = ['Angular', 'React', 'angularjs', 'Nodejs'];

  fileName = 'ExcelSheet.xlsx';
  userModel = new User('default', 'Rroopesh', 'hrroopesh639@gmail.com', '8074668203', 'default' , 'morning', true, true ) ;
  User: any;
  
 constructor(public _enrollmentService: EnrollmentService){
 }

 exportexcel():void{

  let element = document.getElementById('table');
  const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element);

  const wb:XLSX.WorkBook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb,ws,'Sheet1');

  XLSX.writeFile(wb, this.fileName);

 }


  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
    .subscribe(
      data => console.log('success!', data),
      error => console.error('Error!', error)
    )
    this.dataString = JSON.stringify(this.userModel);

  }
  dataString = JSON.stringify(this.userModel);

  
}

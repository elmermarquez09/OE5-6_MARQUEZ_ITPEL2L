import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  id: any;
  student_number: any;
  student_name: any;
  email: any;
  contact_number: any;
  home_address: any;
  students: any = [];


  constructor(public _apiService: ApiService) {}

  //Function for creating student record
  addStudent() {
    //console.log(this.student_number, this.student_name, this.email);
    let data = {
      student_number: this.student_number,
      student_name: this.student_name,
      email: this.email,
      contact_number: this.contact_number,
      home_address: this.home_address
    }

    this._apiService.addStudent(data).subscribe((res: any) => {
      console.log("Success == ", res)
      this.student_number = '';
      this.student_name = '';
      this.email = '';
      this.contact_number = '';
      this.home_address = '';
      alert("SUCCESS");
    }, (error: any) => {
      alert("ERROR")
      console.log("Error = ", error)
    });
  }

  //Function to retrieve students

  getStudents(){
    this._apiService.getStudents().subscribe((res:any) =>{
      console.log("SUCCESS == ", res);
      this.students =res;
    },(error:any) => {
      console.log("ERROR == ", error);
    })
  }

  deleteStudent(id){
    let text;
    if (confirm("Are you sure about that?") == true) {
      text = "Deleted Successfully !";
    } else {
      text = "Delete canceled!";
    } alert(text);
      this._apiService.deleteStudent(id).subscribe((res:any)=>{
        console.log("Delete Success == ", res);
        this.students = res;
      },(error:any)=>{
        console.log("Delete Error == ", error);
      })
    }

}
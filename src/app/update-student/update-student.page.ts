import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.page.html',
  styleUrls: ['./update-student.page.scss'],
})
export class UpdateStudentPage implements OnInit {
  id: any;
  student_number: any;
  student_name: any;
  email: any;
  contact_number: any;
  home_address: any;
  students: any = [];

  constructor(private route: ActivatedRoute, private router: Router, private _apiService: ApiService) { 
    this.route.params.subscribe((param:any) =>{
      this.id = param.id;
      console.log(this.id);
      this.getStudent(this.id);
    })
  }

  ngOnInit() {
  }

  getStudent(id){
    this._apiService.getStudent(id).subscribe((res:any)=>{
    console.log("SUCCESS", res);
    let student = res[0];
    this.student_number = student.student_number;
    this.student_name= student.student_name;
    this.email= student.email;
    this.contact_number= student.contact_number;
    this.home_address= student.home_address;
    
  }, (err: any) =>{
    console.log("ERROR", err);
  })

}

updateStudent(){
  let data = {
    student_number: this.student_number,
    student_name: this.student_name,
    email: this.email,
    contact_number: this.contact_number,
    home_address: this.home_address
  }
  this._apiService.updateStudent(this.id,data).subscribe((res:any) =>{
    console.log("SUCCESS", res);
    alert("SUCCESS");
    this.router.navigateByUrl('/home');
  }, (err:any) => {
    console.log("ERROR", err);
  })
}


}


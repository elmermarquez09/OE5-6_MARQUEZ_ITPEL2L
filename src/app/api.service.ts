import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({providedIn: 'root'})

export class ApiService {
  headers: HttpHeaders

   constructor(public http: HttpClient) {
    this.headers = new HttpHeaders(); 
    this.headers.append('Accept', 'application/json');
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Access-Control-Allow-Origin', '*');
   }

   addStudent (data){
    return this.http.post('http://localhost/ionic_crud_app/backend/create.php',data);
   }

   getStudents(){
    return this.http.get('http://localhost/ionic_crud_app/backend/getstudents.php');
   }

   getStudent(id){
    return this.http.get('http://localhost/ionic_crud_app/backend/getstudent.php?id='+id);
   }

   updateStudent(id,data){
    return this.http.put('http://localhost/ionic_crud_app/backend/updatestudent.php?id='+id,data);
   }

   deleteStudent(id){
    return this.http.delete('http://localhost/ionic_crud_app/backend/delete.php?id='+id);
   }

}
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Injectable({providedIn: 'root'})
export class TestService {
  data:any=[]; 
  review:any;
  constructor(public http: HttpClient) {}
  setOption(value) {      
    this.data= value;  
  }  
  
  getOption() {  
    return this.data;  
  } 

  getLocation() {
        return this.http.get("https://cdn.rawgit.com/santosh-suresh/39e58e451d724574f3cb/raw/784d83b460d6c0150e338c34713f3a1c2371e20a/assignment.json")
  }
  
  

}

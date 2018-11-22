import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';
import { Observable } from 'rxjs/observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-papersheet',
  templateUrl: './papersheet.component.html',
  styleUrls: ['./papersheet.component.css']
})
export class PapersheetComponent implements OnInit {
tablelist:any;
table:any;
startvalue:any;
arrayBooton:Number[];
endvalue:any;
givenAnswer:any;
  constructor(public TestService:TestService,public router :Router,) { }

  ngOnInit() {
     this.startvalue=0;
     this.endvalue=1;
     this.arrayBooton=[0,1,2,3];
  	 this.getlistData()
  }
  getlistData(){
     this.TestService.getLocation().subscribe(data => {
     this.tablelist=data;
     }
    )
   }
   getlistDataAnswer(data,i){
   	if(this.tablelist.length-1>this.startvalue){
   		this.tablelist[this.startvalue].givenAnswer=data
    	this.startvalue++;
     	this.endvalue++;
    this.TestService.setOption(this.tablelist)

    }else{
    this.tablelist[this.startvalue].givenAnswer=data
    this.TestService.setOption(this.tablelist)
    this.router.navigate(['/resultsheet']);
    }
   }



}

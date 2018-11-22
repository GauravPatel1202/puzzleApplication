import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';
import { Observable } from 'rxjs/observable';
import { Router } from '@angular/router';
@Component({
  selector: 'app-resultsheet',
  templateUrl: './resultsheet.component.html',
  styleUrls: ['./resultsheet.component.css']
})
export class ResultsheetComponent implements OnInit {
 resultsheetlist:any;
  constructor(public TestService:TestService,public router :Router) { }

  ngOnInit() {

  	this.getlistResult();
  }
  getlistResult(){
    this.resultsheetlist=this.TestService.getOption()
    
   }
   ngAfterViewInit(){
   	if(this.resultsheetlist<=0)
   	this.router.navigate(['/']);
   }
    
    ngOnDestroy() {
    
  }
}

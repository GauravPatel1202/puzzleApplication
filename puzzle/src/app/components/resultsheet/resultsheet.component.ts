import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';
import { Observable } from 'rxjs/observable';
@Component({
  selector: 'app-resultsheet',
  templateUrl: './resultsheet.component.html',
  styleUrls: ['./resultsheet.component.css']
})
export class ResultsheetComponent implements OnInit {
 resultsheetlist:any;
  constructor(public TestService:TestService) { }

  ngOnInit() {
  	this.getlistResult();
  }
  getlistResult(){
    this.resultsheetlist=this.TestService.getOption()
   }

}

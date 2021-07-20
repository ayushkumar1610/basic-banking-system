import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from 'src/app/service/emp-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  history:any;

  constructor(private empService: EmpServiceService) { }

  ngOnInit(): void {
    this.getHistory();
  }

  getHistory(){
    this.empService.getHistory().subscribe(res=>{
      this.history = res;
    });
  }

}

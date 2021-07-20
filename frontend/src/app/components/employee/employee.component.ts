import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from 'src/app/service/emp-service.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees:any;
  view=false;
  view_emp:any;

  constructor(private employeeService: EmpServiceService) { }

  ngOnInit(): void {
    this.getEmpData();
  }

  getEmpData(){
    this.employeeService.getData().subscribe(res=>{console.log(res); this.employees = res;})
  }

  deleteData(id){
    this.employeeService.deleteEntry(id).subscribe(res=>{
      this.getEmpData();
    });
  }

  viewDetails(emp){
    this.view=true;
    this.view_emp=emp;
  }
  unview(){
    this.view=false;
  }
}

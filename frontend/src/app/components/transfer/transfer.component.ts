import { Component, DebugEventListener, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpServiceService } from 'src/app/service/emp-service.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {

  senderId:any;
  receiverId:any;
  senderData:any;
  receiverData:any;
  fund:Number;
  allEmp:any
  proceed = false;
  historyData:any;
  form: FormGroup

  constructor(private route: ActivatedRoute, private empService: EmpServiceService, private router: Router, private formBuilder:FormBuilder) { }

  createForm(){
    this.form = this.formBuilder.group({
      amount: ["", Validators.required]
    });
  }

  ngOnInit(): void {
    this.senderId = this.route.snapshot.params.id;
    this.getAllEmp();
  
  }

  getAllEmp(){
    this.empService.getData().subscribe(res=>{ this.allEmp = res;})
  }

  selectReceiver(id){
    this.createForm();
    this.receiverId = id;
    this.proceed = true;
    // console.log(this.receiverId,"<<")
  }


  transferFund(){
    this.fund = this.form.value.amount;
    this.debit(this.fund);
    this.credit(this.fund);
  }

  debit(fund){
    this.empService.getDataById(this.senderId).subscribe(res=>{
      this.senderData=res;
      this.senderData.amount = this.senderData.amount-fund;
      this.empService.updateData(this.senderId, this.senderData).subscribe();

    });
  }

  credit(fund){
    this.empService.getDataById(this.receiverId).subscribe(res=>{
      this.receiverData=res;
      this.receiverData.amount = this.receiverData.amount+fund;
      this.empService.updateData(this.receiverId, this.receiverData).subscribe(res=>{
        this.historyData = {sender_name:this.senderData.name,receiver_name:this.receiverData.name,amount:this.fund};
        this.empService.insertHistory(this.historyData).subscribe(res=>{
          this.router.navigateByUrl("/history");
        });
      });

    })
  }



}

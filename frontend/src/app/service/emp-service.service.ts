import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get('http://localhost:3000/api/employee');
  }

  insertData(data){
    return this.httpClient.post('http://localhost:3000/api/employee', data);
  }

  getDataById(id){
    return this.httpClient.get('http://localhost:3000/api/employee/'+id);
  }

  updateData(id, data){
    return this.httpClient.put('http://localhost:3000/api/employee/'+id, data);
  }

  deleteEntry(id){
    return this.httpClient.delete('http://localhost:3000/api/employee/'+id);
  }

  insertHistory(data){
    return this.httpClient.post('http://localhost:3000/api/history', data);    
  }

  getHistory(){
    return this.httpClient.get('http://localhost:3000/api/history');
  }

}

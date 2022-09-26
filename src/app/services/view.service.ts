import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { igroups } from '../components/igroup';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ViewService {
  
  constructor(private httpclient: HttpClient) { }

  createuser(data:any){
    return this.httpclient.post<any>("http://localhost:3000/users", data)
    .pipe(map((data:any)=>{
      return data;
  }))
}

getuser(){
  return this.httpclient.get("http://localhost:3000/users")
}

deleteuser(user){
  return this.httpclient.delete("http://localhost:3000/users/" +user.id)
  }
//on edit passing through params
  fetchdata(id:number){
    return this.httpclient.get<any>("http://localhost:3000/users/"+id );
  }

  updatedata(data:any, id:number){
    return this.httpclient.put<any>("http://localhost:3000/users/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    })) 
  }
}

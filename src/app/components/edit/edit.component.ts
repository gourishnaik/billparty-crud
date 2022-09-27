import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { igroups } from '../igroup';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
interface citie {
  value: string;
  viewValue: string;
}
interface states {
  value: string;
  viewValue: string;
}
interface currencies {
  value: string;
  viewValue: string;
}
interface countri {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  formData: any = {};
  //ngform:any = {};
  public groups: igroups = {} as igroups;
  public dataid: any;
  public data: any;
  country: countri[] = [
    { value: 'india', viewValue: 'india' },
    { value: 'pakistan', viewValue: 'Pakistan' },
    { value: 'srilanka', viewValue: 'srilanka' },
  ];
  city: citie[] = [
    { value: 'panjim', viewValue: 'panim' },
    { value: 'bangaluru', viewValue: 'bangaluru' },
    { value: 'mumbai', viewValue: 'mumbai' },
  ];
  state: states[] = [
    { value: 'goa', viewValue: 'goa' },
    { value: 'karnataka', viewValue: 'karnataka' },
    { value: 'maharastra', viewValue: 'maharastra' },
  ];
  currency: currencies[] = [
    { value: 'yen', viewValue: 'yen' },
    { value: 'dollar', viewValue: 'dollar' },
    { value: 'rupee', viewValue: 'rupee' },
  ];
  constructor(private Activatedroute: ActivatedRoute,private viewservice: ViewService,private router: Router) { }

  ngOnInit(): void {
    this.getlatest(); //getting data before refresh
    this.Activatedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param.get('dataid');
    })

this.viewservice.fetchdata(this.dataid).subscribe((data:any)=>{
  this.groups = data;
  //console.log(data)
})


  }

update(){
  this.getlatest();
  this.viewservice.updatedata(this.groups,this.dataid).subscribe((data:any)=>{
    this.router.navigate(['/view'])

  })
}
//getting data before refresh
getlatest(){
  this.viewservice.getuser();
}


}

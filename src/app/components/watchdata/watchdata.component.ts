import { Component, OnInit } from '@angular/core';
import { ViewService } from 'src/app/services/view.service';
import { igroups } from '../igroup';
import { ActivatedRoute, Params } from '@angular/router';
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
  selector: 'app-watchdata',
  templateUrl: './watchdata.component.html',
  styleUrls: ['./watchdata.component.css']


})
export class WatchdataComponent implements OnInit {
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
  constructor(private Activatedroute: ActivatedRoute,private viewservice: ViewService) { }

  ngOnInit(): void {
    this.Activatedroute.paramMap.subscribe((param: Params) => {
      this.dataid = param.get('dataid');
    })

this.viewservice.fetchdata(this.dataid).subscribe((data:any)=>{
  this.groups = data;
  //console.log(data)
})


  }

}

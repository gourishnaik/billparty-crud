import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from './employemodel';
import { FormGroup, Validators, NgForm, FormControl, FormBuilder } from '@angular/forms';
import { MyserviceService } from 'src/app/services/myservice.service';
import { igroups } from '../igroup';
import { ViewService } from 'src/app/services/view.service';
import { Router } from '@angular/router';
interface countri {
  value: string;
  viewValue: string;
}
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
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {
  employeeModelObj: EmployeeModel = new EmployeeModel();
  employeeform!: FormGroup;
  public empy: EmployeeModel = {} as EmployeeModel;
  public groups: igroups = {} as igroups;
  alluser: any = '';
  isEdit = false;
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
  userobj = {

    name: '',
    mobile: '',
    email: '',
    department: '',
    designation: '',

  }
  constructor(private formbuilder: FormBuilder, private employeeservice: MyserviceService,
    private viewservice: ViewService,private router: Router) { }

  ngOnInit(): void {
    this.getLatestUser();
    this.employeeform = this.formbuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      designation: ['', Validators.required],
    })
   
  }
  add() {
    console.log(this.employeeform.value)
    this.employeeModelObj.name = this.employeeform.value.name;
    this.employeeModelObj.mobile = this.employeeform.value.mobile;
    this.employeeModelObj.email = this.employeeform.value.email;
    this.employeeModelObj.department = this.employeeform.value.department;
    this.employeeModelObj.designation = this.employeeform.value.designation;
    this.employeeform.reset();

    this.employeeservice.createuser(this.employeeModelObj).subscribe((res) => {
      alert("added successfully!!!");
      this.getLatestUser();
    })
  }
  getLatestUser() {
    this.employeeservice.getAlluser()
      .subscribe(res => {
        this.alluser = res
      })
  }

  deleteuser(user: any) {
    if (confirm('Are you sure to delete?'))
      this.employeeservice.deleteuser(user).subscribe(() => {
        this.getLatestUser();
      })
  }

  edituser(user:any) {
  this.isEdit = true;
   this.empy= user;
   this.employeeform.controls['name'].setValue(user.name)
   this.employeeform.controls['mobile'].setValue(user.mobile)
   this.employeeform.controls['email'].setValue(user.email)
   this.employeeform.controls['department'].setValue(user.department)
   this.employeeform.controls['designation'].setValue(user.designation)
   
  }



  clear() {
    this.isEdit = false;
this.employeeform.reset();
  }
  updateuser() {
   
    this.employeeservice.updateuser(this.empy).subscribe(() => {
      this.employeeform.reset();
      this.getLatestUser();
      alert("updated sucessfully!!!")
      this.isEdit = !this.isEdit;
    })
  }

  //first one create
  createsubmit() {
    //console.log('hello')
    this.viewservice.createuser(this.groups).subscribe((data:igroups)=>{
      console.log(data);
      this.router.navigate(['/view'])
    },
    err => {
      alert("something went wrong try again")
      this.router.navigate(['/'])
    });


  }

  clearout(){
    this.groups.address='';
    this.groups.city='';
    this.groups.code='';
    this.groups.country='';
    this.groups.currency='';
    this.groups.gst='';
    this.groups.latitude='';
    this.groups.longitude='';
    this.groups.mail='';
    this.groups.names='';
    this.groups.pannumber='';
    this.groups.phone='';
    this.groups.pincode='';
    this.groups.state='';
    alert('form is been cleared ')
  


  }


}

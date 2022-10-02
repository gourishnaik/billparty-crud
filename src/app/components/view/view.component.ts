import { Component, OnInit } from '@angular/core';
import { igroups } from '../igroup';
import { ViewService } from 'src/app/services/view.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public loading: boolean = false;
  public groups: igroups = {} as igroups;
  alluser:any;
  userFilter:any={names:'',};
  constructor(private viewservice: ViewService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.viewservice.getuser()
      .subscribe(res => {
        setTimeout(() => {
        this.alluser = res;
       // console.log(res);
        },2000)

        setTimeout(() => {
          
          this.loading = true;
       }, 1500)
      })
  }


  deleteuser(user: any) {
    if (confirm('Are you sure to delete?'))
      this.viewservice.deleteuser(user).subscribe(() => {
        this.getUser();
      })
  }

}

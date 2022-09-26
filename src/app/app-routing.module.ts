import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { ViewComponent } from './components/view/view.component';
import { WatchdataComponent } from './components/watchdata/watchdata.component';

const routes: Routes = [
  {path:'',redirectTo:'add',pathMatch:'full'},
  {path:'add',component:AddComponent},
  {path:'view',component:ViewComponent},
  {path:'watchdata/view/:dataid',component:WatchdataComponent},
  {path:'editdata/update/:dataid',component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

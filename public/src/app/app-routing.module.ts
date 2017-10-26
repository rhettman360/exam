import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component'
import { DashboardComponent} from './dashboard/dashboard.component'
import { CreateComponent} from './create/create.component'
import { ShowComponent} from './show/show.component'
const routes: Routes = [

    {path: '', pathMatch: 'full', component: LoginComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'new_poll', component: CreateComponent},
    {path: 'poll/:id', component: ShowComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

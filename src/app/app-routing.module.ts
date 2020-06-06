import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MeetingDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

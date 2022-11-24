import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule, Routes } from '@angular/router';

import { HomePageRoutingModule } from './home-routing.module';

const routes: Routes = [
  {
    path:'',
    component:HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, FormsModule, IonicModule, HomePageRoutingModule],
  exports:[RouterModule],
  declarations: [HomePage]
})

export class HomePageModule {}

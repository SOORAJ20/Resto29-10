import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestoRoutingModule } from './resto-routing.module';
import { ListRestoComponent } from './list-resto/list-resto.component';
import { AddRestoComponent } from './add-resto/add-resto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateRestoComponent } from './update-resto/update-resto.component';



@NgModule({
  declarations: [ListRestoComponent, AddRestoComponent, UpdateRestoComponent],
  imports: [
    CommonModule,
    RestoRoutingModule,
    ReactiveFormsModule

  ]
})
export class RestoModule { }

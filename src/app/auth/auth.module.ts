import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: AuthComponent }]),
    SharedModule,
  ],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JhipcustfinalSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [JhipcustfinalSharedModule, RouterModule.forChild([HOME_ROUTE]), BrowserModule, HttpClientModule, FormsModule, ChartsModule],

  declarations: [HomeComponent],
})
export class JhipcustfinalHomeModule {}

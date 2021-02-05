import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipcustfinalSharedModule } from 'app/shared/shared.module';
import { JhipcustfinalCoreModule } from 'app/core/core.module';
import { JhipcustfinalAppRoutingModule } from './app-routing.module';
import { JhipcustfinalHomeModule } from './home/home.module';
import { JhipcustfinalEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipcustfinalSharedModule,
    JhipcustfinalCoreModule,
    JhipcustfinalHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipcustfinalEntityModule,
    JhipcustfinalAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class JhipcustfinalAppModule {}

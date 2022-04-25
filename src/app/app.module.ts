import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StructuralComponent} from './structural/structural.component'
import {AttributeComponent} from './attribute/attribute.component';
import{AttrDirective} from './attr.directive';
import{Dname2Directive} from './dname2.directive';
@NgModule({
  declarations: [
    AppComponent,
    StructuralComponent,
    AttributeComponent,
    AttrDirective,
    Dname2Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

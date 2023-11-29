import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http";
import { TableModule } from 'primeng/table';
import {ConfirmationService, MessageService} from "primeng/api";
import { AppComponent } from './app.component';
import { UsuarioComponent } from './module/usuario/usuario.component';
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {DockModule} from "primeng/dock";
import { ProductoComponent } from './module/producto/producto.component';
import {DialogModule} from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CardModule,
    ButtonModule,
    TableModule,
    DockModule,
    DialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

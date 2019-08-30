import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { CustomerTypesComponent } from './components/Ticket-DescriptionAPP/customer-types/customer-types.component';
import { MatInputModule } from '@angular/material';

import { ContractTypesComponent } from './components/Ticket-DescriptionAPP/contract-types/contract-types.component';
import { ProductsComponent } from './components/Ticket-DescriptionAPP/products/products.component';
import { WarrantiesComponent } from './components/Ticket-DescriptionAPP/warranties/warranties.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {EventEmitter } from '@angular/core';
import { AditionalInformationComponent } from './components/Ticket-DescriptionAPP/aditional-information/aditional-information.component';
import { MatIconModule } from '@angular/material/icon';
import { TicketDescriptionComponent } from './components/Ticket-DescriptionAPP/ticket-description/ticket-description.component';
import 'hammerjs';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CopyService } from './services/copyService';
@NgModule({
  declarations: [
    AppComponent,
    CustomerTypesComponent,
    ContractTypesComponent,
    ProductsComponent,
    WarrantiesComponent,
    AditionalInformationComponent,
    TicketDescriptionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule, BrowserAnimationsModule, FormsModule,
    MatSlideToggleModule, MatRadioModule, MatCardModule,
  MatCheckboxModule,
    MatIconModule,
    MatToolbarModule
    
  ],
  providers: [CopyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

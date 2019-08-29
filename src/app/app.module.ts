import { BrowserModule } from '@angular/platform-browser';
<<<<<<< Updated upstream
import { NgModule } from '@angular/core';      

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

//Angular Material Components
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';


import { AppComponent } from './app.component';     
import { AppRoutingModule } from './app-routing.module';
import { TemplateComponent } from './components/template/template.component';
import { AutoTemplateComponent } from './components/auto-template/auto-template.component';
import { HeaderComponent } from './components/header/header.component';
import { CopyService } from './services/copyService';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    AutoTemplateComponent,
    HeaderComponent
  ],
  imports: [   
    BrowserModule,    
    AppRoutingModule,  
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,      
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,

  ],
  providers: [CopyService],
=======
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
import { CustomerTypesComponent } from './Component/customer-types/customer-types.component';
import { MatInputModule } from '@angular/material';

import { ContractTypesComponent } from './Component/contract-types/contract-types.component';
import { ProductsComponent } from './Component/products/products.component';
import { WarrantiesComponent } from './Component/warranties/warranties.component';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {EventEmitter } from '@angular/core';
@NgModule({
  declarations: [
    AppComponent,
    CustomerTypesComponent,
    
    ContractTypesComponent,
    ProductsComponent,
    WarrantiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule, BrowserAnimationsModule, FormsModule,
    MatSlideToggleModule, MatRadioModule, MatCardModule,
  MatCheckboxModule,
    EventEmitter
  ],
  providers: [],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }

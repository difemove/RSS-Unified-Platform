import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {EventEmitter } from '@angular/core';
import 'hammerjs';


//Services
import { CopyService } from './services/copyService';
import { DataChangeService } from './Services/data-change.service';
//Angular Material Components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSliderModule} from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatDialog } from '@angular/material';


//Components
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoTemplateComponent } from './components/TemplateAPP/autoTemplate/auto-template.component';
import { TemplateComponent } from './components/TemplateAPP/template/template.component';
import { CustomerTypesComponent } from './components/Ticket-DescriptionAPP/customer-types/customer-types.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { TabSelectorComponent } from './components/tab-selector/tab-selector.component';
import { ReturnTypesComponent } from './components/Ticket-DescriptionAPP/return-types/return-types.component';
import { AditionalInformationComponent } from './components/Ticket-DescriptionAPP/aditional-information/aditional-information.component';
import { TicketDescriptionComponent } from './components/Ticket-DescriptionAPP/ticket-description/ticket-description.component';
import { ContractTypesComponent } from './components/Ticket-DescriptionAPP/contract-types/contract-types.component';
import { ProductsComponent } from './components/Ticket-DescriptionAPP/products/products.component';
import { WarrantiesComponent } from './components/Ticket-DescriptionAPP/warranties/warranties.component';
import { ReturnTypesDialogComponent } from './components/Ticket-DescriptionAPP/return-types-dialog/return-types-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    CustomerTypesComponent,
    ContractTypesComponent,
    ProductsComponent,
    WarrantiesComponent,
    AditionalInformationComponent,
    TicketDescriptionComponent,
    HeaderComponent,
    TemplateComponent,
    AutoTemplateComponent,
    TitlePageComponent,
    TabSelectorComponent,
    ReturnTypesComponent,
    ReturnTypesDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule, 
    BrowserAnimationsModule, 
    FormsModule,
    MatSlideToggleModule, 
    MatRadioModule, 
    MatCardModule,
  MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
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
  providers: [CopyService,DataChangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }

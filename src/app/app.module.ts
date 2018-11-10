import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

//PrimeNG Components
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { CardModule } from 'primeng/card';
import { SidebarModule } from 'primeng/sidebar';
import { ToolbarModule } from 'primeng/toolbar';
import { MultiSelectModule } from 'primeng/multiselect';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';

//PrimeNG Service
import { MessageService } from 'primeng/api';


//Routing
import { routing, appRoutingProviders } from './app.routing';
import { InformationComponent } from './components/information.component';
import { AnimalsListComponent } from './components/animals-list.component';
import { CardInformationComponent } from './components/card-information.component';
import { AnimalFormComponent } from './components/animal-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InformationComponent,
    AnimalsListComponent,
    CardInformationComponent,
    AnimalFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    routing,
    //PRIME
    InputTextModule,
    ButtonModule,
    InputTextareaModule,
    FileUploadModule,
    CardModule,
    SidebarModule,
    ToolbarModule,
    MultiSelectModule,
    MessageModule,
    MessagesModule,
    CheckboxModule,
    RadioButtonModule
  ],
  providers: [appRoutingProviders, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

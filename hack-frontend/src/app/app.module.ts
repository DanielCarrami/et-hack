import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TalksMentorsComponent } from './talks-mentors/talks-mentors.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutHackComponent } from './about-hack/about-hack.component';
import { FaqSectionComponent } from './faq-section/faq-section.component';
import {MatExpansionModule} from '@angular/material/expansion'
import {MatSelectModule} from '@angular/material/select';

import { SponsorBannerComponent } from './sponsor-banner/sponsor-banner.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { TopicsComponent } from './topics/topics.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TalksDetailsComponent } from './modals/talks-details/talks-details.component';
import { ComiteInfoComponent } from './comite-info/comite-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TalksMentorsComponent,
    RegistrationComponent,
    MainPageComponent,
    AboutHackComponent,
    FaqSectionComponent,
    SponsorBannerComponent,
    ContactInfoComponent,
    TopicsComponent,
    TalksDetailsComponent,
    ComiteInfoComponent
  ],
  imports: [
    BrowserModule,
    MatExpansionModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    NgbModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

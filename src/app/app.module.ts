import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MeetingDetailsComponent } from './meeting-details/meeting-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng-lts/calendar';
import {InputSwitchModule} from 'primeng-lts/inputswitch';
import { ButtonModule } from 'primeng-lts/components/button/button';
import { DropdownModule } from 'primeng-lts/components/dropdown/dropdown';
import { LanguageTranslatorService } from './language-translator.service';
// import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
// import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { StorageService } from './storage.service';
import { LocalService } from './local.service';

@NgModule({
  declarations: [
    AppComponent,
    MeetingDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
    InputSwitchModule,
    ButtonModule,
    DropdownModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: LanguageTranslatorService,
          deps: [HttpClient]
      }
  })
    
  ],
  providers: [LanguageTranslatorService,StorageService,LocalService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
    // this language will be used as a fallback when a translation isn't found in the current language
  //   translate.setDefaultLang('en');
  //   // the lang to use, if the lang isn't available, it will use the current loader to get them
  //   translate.use('en');
//   constructor(private translate: TranslateService) {
//     translate.setDefaultLang('en');
// }

  }

  export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

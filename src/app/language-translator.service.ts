import { Injectable } from '@angular/core';
import { TranslateLoader } from 'node_modules/translate-loader';

import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LanguageTranslatorService implements TranslateLoader{
  getTranslation(lang: string): Observable<any> {
    return of({
      label_full_name :'Full Name'


    }); 
  }
  constructor() { }
}

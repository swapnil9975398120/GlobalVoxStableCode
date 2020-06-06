import { Injectable } from '@angular/core';

@Injectable()
export class AppSetting {
    public static TIMEZONE = [
        { label: 'UTC', value: 'UTC' },
        { label: 'IST', value: 'IST' },
        { label: 'EAT', value: 'EAT' },
        { label: 'NET', value: 'NET' },
        { label: 'NST', value: 'NST' },
        { label: 'AST', value: 'AST' },
        { label: 'EST', value: 'EST' }
      ];
     
      
}

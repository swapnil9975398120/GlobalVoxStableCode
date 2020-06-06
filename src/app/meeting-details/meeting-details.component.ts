import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AppSetting } from '../app-setting';
import * as moment from 'moment'
import { LocalService } from '../local.service';

//import { StorageServiceService } from '../storage-service.service';
// import { AppSettings } from '../../../shared/app.settings';

@Component({
  selector: 'app-meeting-details',
  templateUrl: './meeting-details.component.html',
  styleUrls: ['./meeting-details.component.css']
})
export class MeetingDetailsComponent implements OnInit {
  meetingDetailForm : FormGroup;
  // minDate: any;
  // maxDate: any;
  dateFormat;
  checked:boolean;
  labelCancel = "Cancel";
  labelSave = "Save";
  minDate = new Date();
  maxDate = new Date();
  selectedTimeInMillis = 0;
  timeZoneOptions: Array<any> = [];
  timeZone;
  key:any;
  retriveData : Array<any> = []
  constructor(
    private formBuilder: FormBuilder,
    private localService: LocalService

    // private storageService: StorageServiceService
) { }

  ngOnInit() {
    this.timeZoneOptions = AppSetting.TIMEZONE;
    this.meetingDetailForm = this.formBuilder.group({
      fullName: ['', [
        Validators.required,
       
      ]],
      meetingDate: ['', [
    
      ]],
      startTime: ['', [
    
      ]],
      endTime: ['', [
    
      ]],
      timeZone: ['', [
      ]],
      checked: ['', [
      ]],

    });
    
 
  }

  getTime(event) {
     const hours = moment(event).hour();
      const mins = moment(event).minute();
    const millisInAMinute = 60000;
    this.selectedTimeInMillis = (((hours * 60) + mins) * millisInAMinute);
    
  }

  onSelectStartDate() {
    this.maxDate = this.meetingDetailForm.controls.meetingDate.value;
  }

  onTimeZoneChange(e){

  }

  addForm() {
    const data = this.meetingDetailForm.value;
    data.startTime = this.formatDateCell(this.meetingDetailForm.controls.startTime.value.getTime());
    data.endTime = this.formatDateCell(this.meetingDetailForm.controls.endTime.value.getTime());
   // data.meetingDate = this.meetingDetailForm.controls.meetingDate.value;

     //Encryption
    //  this.localService.setJsonValue('user', JSON.stringify(data));
     
     //Decryption
    // const user = this.localService.getJsonValue('user');
    localStorage.setItem(this.key, JSON.stringify(data));
    this.retriveData.push(JSON.parse(localStorage.getItem(this.key)));
    this.meetingDetailForm.reset();
    this.localService.clearToken();

  }

   formatDateCell(timestamp) {
     return moment(timestamp).format('hh:mm A');
  }
  
  cancel() {
     this.meetingDetailForm.reset();
  }
}

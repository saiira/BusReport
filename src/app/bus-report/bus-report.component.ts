import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { DatePipe } from '@angular/common';
import {FileService} from '../Services/file.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-bus-report',
  templateUrl: './bus-report.component.html',
  styleUrls: ['./bus-report.component.css'],
  providers:[FileService] 
})
export class BusReportComponent {
  today: number = Date.now();
  busReportModel:BusReportModel = null;
  busReportForm: FormGroup;
  
  constructor(private fileService: FileService, private fb: FormBuilder ) {

    this.createForm();

    this.fileService.getJSON().subscribe(resultJson => {
     
      this.busReportModel = resultJson;
      for(let i = 0; i < this.busReportModel.data.length ; i++)
        (this.busReportForm.get('busReportFormArray') as FormArray).push(this.notesControl)
 
      });
   }
  
  createForm(){
     this.busReportForm = this.fb.group({
     busReportFormArray : this.fb.array([]) 
    });
  } 

  get notesControl(): FormGroup {
    return this.fb.group({
      txtNotes: "",
      txtOrganisation:""
    });
  }

  getStatus(statusValue:number):String
  {
   
    if ( statusValue < 0)
    return "Early";
    if ( (statusValue > 0 ) && (statusValue<= 300 ) )
      return "On Time";
    else if(statusValue > 300 )
      return "Late";
    else 
      return "Not Valid";
    
  }
  getStatusClass(statusText: string):String{
     if ( statusText == "Early")
    return "bus-Status-Early";
    if ( statusText == "On Time" )
      return "bus-Status-OnTime";
    else if( statusText == "Late" )
      return "bus-Status-Late";
    else 
      return "bus-Status-NotValid";
 }
 getRouteVariantClass(routeVariant:String):String {
  var arrRouteVariant = routeVariant.split(' ');
 let  returnStringHtmlRouteVariant : String;
   if ( arrRouteVariant.length < 3  )
   {
     return arrRouteVariant.toString();
   }
   else
   {
  return "<b>" + arrRouteVariant[0] + "</b>" + " " + arrRouteVariant[1] + " " + arrRouteVariant[2];
   }
 }
  saveNotes(indexSelected) {
    console.log(" form submiited ");
  }
   

}

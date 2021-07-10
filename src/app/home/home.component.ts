/**
 * * Title: home.component.ts
 * Author: Larry Ohaka
 * Date: 7/3/21
 * Description: Input Properties
 */

 import { Component, OnInit } from '@angular/core';
 import { ITranscript } from '../transcript.interface';
 import { FormGroup, FormBuilder, Validators } from '@angular/forms';

 @Component({
   selector: 'app-home',
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.css'],
 })
 export class HomeComponent implements OnInit {
   transcriptEntry: ITranscript;
   //@ts-ignore
   transcriptForm: FormGroup;
   //Variables with string of letter grades
   selectableGrades: Array<string> = ['A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'D-', 'F'];
   //Variable with empty array
   transcriptEntries: Array<ITranscript> = [];
   gpaTotal: number = 0;;


   constructor(private fb: FormBuilder) {
     //Object assigned to the transcriptEntry varible
     this.transcriptEntry = {} as ITranscript;
   }

   ngOnInit(): void {
    this.transcriptForm = this.fb.group({
      course: ['', Validators.required],
      grade: ['', Validators.required],
    });
   }

   get form() {
    return this.transcriptForm.controls;
  }

  // save user entry
  // @ts-ignore
  onSubmit(event) {
    this.transcriptEntries.push({
      course: this.form.course.value,
      grade: this.form.grade.value,
    });

    event.currentTarget.reset();
  }


   calculateResults() {
     let gpa: number = 0;
//For loop for possible grade gpa
     for (let entry of this.transcriptEntries) {
       console.log(entry.grade)
       switch(entry.grade) {
         case 'A':
           console.log('its an a')
           gpa += 4.0;
           break;
         case 'A-':
           gpa += 3.7;
           break;
         case 'B+':
           gpa += 3.33;
           break;
         case 'B':
           gpa += 3.00;
           break;
         case 'B-':
           gpa += 2.70;
           break;
         case 'C+':
           gpa += 2.30;
           break;
         case 'C-':
           gpa += 1.70;
           break;
         case 'D+':
           gpa += 1.30;
           break;
         case 'D':
           gpa += 1.00;
           break;
         case 'D-':
           gpa += 0.70;
           break;
         default:
           gpa += 0.00;
           break;
       }
     }

     this.gpaTotal = gpa / this.transcriptEntries.length;
    }

    // clear the transcript
    clearEntries() {
      this.transcriptEntries = [];
      this.gpaTotal = 0;
    }
  }

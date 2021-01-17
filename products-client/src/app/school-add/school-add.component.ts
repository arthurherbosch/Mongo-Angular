import { Component } from '@angular/core'
import { School } from '../service/model/school'
import { SchoolService } from '../service/school.service'
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component ({
   selector: 'school-add',
   templateUrl: './school-add.component.html'
})

export class SchoolAddComponent {

   school = this.fb.group({
      naam: ['', Validators.required],
      locatie: ['', Validators.required],
      soort: ['', Validators.required],
      leerlingen: ['', [Validators.required]]
   })

   constructor(private ps: SchoolService, 
               private fb: FormBuilder, 
               private router: Router) {}

   onSubmit() {
       this.ps.addSchool(new School(
                                       this.school.value.naam,
                                       this.school.value.locatie,
                                       this.school.value.soort,
                                       this.school.value.leerlingen))
       this.router.navigate([''])
   }
}
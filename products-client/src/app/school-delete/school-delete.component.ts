import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { SchoolService } from '../service/school.service'

@Component ({
   selector: 'school-delete',
   templateUrl: './school-delete.component.html'
})

export class SchoolDeleteComponent {

   schoolNaam: string
   school = this.fb.group({
      naam: ['', Validators.required],
   })

   constructor(private ps: SchoolService,
               private fb: FormBuilder, 
               private router: Router) {

      this.schoolNaam = router.url.split('/')[2]
      this.school.controls['naam'].setValue(this.schoolNaam)
   }

   onSubmit() {
      this.ps.deleteSchool(this.school.value.naam)
      this.router.navigate([''])
   }
}

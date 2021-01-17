import { Component } from '@angular/core'
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { School } from '../service/model/school'
import { SchoolService } from '../service/school.service'

@Component ({
   selector: 'school-search',
   templateUrl: './school-search.component.html'
})

export class SchoolSearchComponent {
   
   scholen : School[]

   school = this.fb.group({
      naam: ['', Validators.required]
   })

   constructor(private ps: SchoolService,
               private fb: FormBuilder) {}

   onSubmit() {
      
      this.ps.searchAllScholen(this.school.value.naam)
                   .subscribe(data => { this.scholen = data }, 
                              error => { console.error(error) })
   }
}

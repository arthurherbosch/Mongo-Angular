import { Component } from '@angular/core'
import { School } from '../service/model/school'
import { SchoolService } from '../service/school.service'

@Component({
   selector: 'school-list',
   templateUrl: './school-list.component.html'
})

export class SchoolListComponent  {
   
   scholen: School[]

   constructor(private ps: SchoolService) {}

   ngOnInit(): void {
       this.ps.getAllScholen()
                  .subscribe(data => { 
                     console.log(data),
                     this.scholen = data }, 
                             error => { console.error(error) })
   }
}

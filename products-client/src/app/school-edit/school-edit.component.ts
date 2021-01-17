import { Component } from '@angular/core'
import { Router, ActivatedRoute } from "@angular/router"
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { School } from '../service/model/school'
import { SchoolService } from '../service/school.service'

@Component({
  selector: 'school-edit',
  templateUrl: './school-edit.component.html'
})
export class SchoolEditComponent {
 
 schoolNaam: string
 school = this.fb.group({
  naam: ['', Validators.required],
  locatie: ['', Validators.required],
  soort: ['', Validators.required],
  leerlingen: ['', Validators.required],
})

 constructor(private ps: SchoolService,
             private fb: FormBuilder, 
             private router: Router,
             private activeroute: ActivatedRoute) {

    // simple splitting of url parts
    this.schoolNaam = router.url.split('/')[2]
    // preferred way of handling active route
    this.activeroute.params
      .subscribe(params => { this.schoolNaam = params['naam'];
                              console.log(params);
                             this.ps.searchOneSchool(this.schoolNaam)
                                .subscribe(data => { this.school.controls['naam'].setValue(data[0].naam)
                                                     this.school.controls['locatie'].setValue(data[0].locatie)
                                                     this.school.controls['soort'].setValue(data[0].soort)
                                                     this.school.controls['leerlingen'].setValue(data[0].leerlingen)
                                                    }, 
                                          error => { console.log(error) })
                            }
                )
    /* FOR COUCHDB USE THIS
    this.activeroute.params
      .subscribe(params => { this.productName = params.name;
                              console.log(params);
                             this.ps.searchOneProduct(this.productName)
                                .subscribe(data => { this.product.controls['name'].setValue(data.name)
                                                     this.product.controls['brand'].setValue(data.brand)
                                                     this.product.controls['description'].setValue(data.description)
                                                     this.product.controls['price'].setValue(data.price)
                                                    }, 
                                          error => { console.log(error) })
                            }
                )
      */
    
 }

 onSubmit() {
    this.ps.editSchool(new School(this.school.value.naam,
                                    this.school.value.locatie,
                                    this.school.value.soort,
                                    this.school.value.leerlingen))
    this.router.navigate([''])
 }
}

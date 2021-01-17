import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { School } from './model/school';

@Injectable( {providedIn: 'root'} )
export class SchoolService {

   private scholenServiceURI: string = 'http://localhost:3000/scholen'
   private contentHeaders: HttpHeaders

   constructor(private http: HttpClient) {
      this.contentHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
   }

   // Get all products
   getAllScholen(): Observable<School[]> {
      let url = `${this.scholenServiceURI}`
      return this.http.get<School[]>(url)
   }

   // Insert a new product
   addSchool(school: School): void {
      let url = `${this.scholenServiceURI}/add`
      // !!! subscribe is needed to execute POST
      this.http.post(url, school.getParams(),
                    { headers: this.contentHeaders })
                    .subscribe(data => { console.log(data) }, 
                               error => { console.error(error) })
   }

   // Edit a product
   editSchool(school: School): void {
      let url = `${this.scholenServiceURI}/edit`;
      // !!! subscribe is needed to execute POST
      this.http.post(url, school.getParams(),
                    { headers: this.contentHeaders })
                    .subscribe(data => { console.log(data) }, 
                               error => { console.error(error) })
   }

   // Search all product by name
   searchAllScholen(naam: string): Observable<School[]> {
      let url = `${this.scholenServiceURI}/searchAll`

      return this.http.post<School[]>(url, `naam=${naam}`,
                    { headers: this.contentHeaders })
   }

   // Search one product by name
   searchOneSchool(naam: string): Observable<School[]> {
      let url = `${this.scholenServiceURI}/searchOne`

      return this.http.post<School[]>(url, `naam=${naam}`,
                    { headers: this.contentHeaders })
   }
   /* Search one product by name 
   -- FOR COUCHDB USE THIS
   searchOneProduct(name: string): Observable<Product> {
      let url = `${this.productsServiceURI}/searchOne`

      return this.http.post<Product>(url, `name=${name}`,
                    { headers: this.contentHeaders })
   }
   */

   // Delete a product
   /*
   deleteProduct(name: string): void {
      let url = `${this.productsServiceURI}/delete`;
      // !!! subscribe is needed to execute DELETE
      this.http.post(url, `name=${name}`,
                    { headers: this.contentHeaders })
                    .subscribe(data => { console.log(data) }, 
                               error => { console.error(error) })
   }
   */
  deleteSchool(naam: string): void {
   let url = `${this.scholenServiceURI}/delete/${naam}`;
   // !!! subscribe is needed to execute DELETE
   this.http.delete(url,
                 { headers: this.contentHeaders })
                 .subscribe(data => { console.log(data) }, 
                            error => { console.error(error) })
}
w
   
}

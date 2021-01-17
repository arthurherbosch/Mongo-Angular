import { HttpParams } from '@angular/common/http';

export class School {

   constructor (public naam: string,
                public locatie: string, 
                public soort: string, 
                public leerlingen: string) {}

   getParams() : HttpParams {
      return new HttpParams()
         .set('naam', this.naam)
         .set('locatie', this.locatie)
         .set('soort', this.soort)
         .set('leerlingen', this.leerlingen);
   }
}

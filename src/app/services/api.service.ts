import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {

  constructor(private http:HttpClient) { }

  getdata(): Observable<any>{
    return this.http.get('assets/test.json',{
      headers: new HttpHeaders().set('Content-Type', 'application/json'),
      responseType: 'json' 
   });
  }

  getdataOfAll(){
    return this.http.get('https://mamatapress.herokuapp.com/api/card/getNewNormalCards');
  }

  getJsonSVG(key):any{
    return this.http.get('https://mamatapress.herokuapp.com/api/card/getCardSvgData/'+key);
  }
}

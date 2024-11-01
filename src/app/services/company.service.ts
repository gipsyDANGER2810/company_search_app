import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  apiKey = 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf'
  

  constructor(private http : HttpClient) { 

  }

  searchCompany (searchQuery:string): Observable<any>{
    const url = `/TruProxyAPI/rest/Companies/v1/Search?Query=${searchQuery}`;
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey
    });

    return this.http.get<any>(url,{headers});


  }

  getCompanyDetails(companyNumber: string): Observable<any> {
    const url = `/TruProxyAPI/rest/Companies/v1/Search?Query=${companyNumber}`;
    const headers = new HttpHeaders({
      'x-api-key': this.apiKey, 
    });
  
    return this.http.get<any>(url,{headers});
  }
}

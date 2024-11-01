import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-officers',
  templateUrl: './company-officers.component.html',
  styleUrls: ['./company-officers.component.css']
})
export class CompanyOfficersComponent {

  loading = true
  officers: any[] = [];
  apiKey = 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf'

  constructor(
    private route: ActivatedRoute, 
    private companyService: CompanyService,
    private http : HttpClient) { }

    ngOnInit(){
      
      const companyId = this.route.snapshot.paramMap.get('id');
      
      if(companyId){
        const url = `/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=${companyId}`;
        console.log(companyId)
        const headers = new HttpHeaders({
          'x-api-key': this.apiKey
        });

        this.http.get<any>(url, { headers }).subscribe(
          data => {
            this.officers = data.items || [];
            console.log(this.officers)
            this.loading = false
          },
          error => {
            console.error('Error fetching companies', error);
          }
        );
      }
    }
}

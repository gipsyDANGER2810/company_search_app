import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent {

  company: any;
  loading = true;
  apiKey = 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf'
  constructor(
    private route: ActivatedRoute, 
    private companyService: CompanyService,
    private http : HttpClient) { }

  ngOnInit() {
    const companyId = this.route.snapshot.paramMap.get('id');

    if (companyId) {


      this.companyService.getCompanyDetails(companyId).subscribe(
        data =>{
          this.company = data.items[0]|| [];
          this.loading = false
        },
        error =>{
          console.error('Error fetching companies', error);
        }
      )

    }
  }
}

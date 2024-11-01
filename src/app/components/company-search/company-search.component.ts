import { Component } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-company-search',
  templateUrl: './company-search.component.html',
  styleUrls: ['./company-search.component.css']
})
export class CompanySearchComponent {
  searchQuery = '';
  companies: any[] = [];
  apiKey = 'PwewCEztSW7XlaAKqkg4IaOsPelGynw6SN9WsbNf';  

  constructor(
    private http: HttpClient,
    private companyService: CompanyService
  ) {}

  searchCompanies() {
    if (!this.searchQuery.trim()) {
      return;
    }
    this.companyService.searchCompany(this.searchQuery).subscribe(
      data =>{
        this.companies = data.items || [];
      },
      error =>{
        console.error('Error fetching companies', error);
      }
    )

  }



}

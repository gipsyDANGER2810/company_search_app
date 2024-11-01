import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanySearchComponent } from './components/company-search/company-search.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import { CompanyOfficersComponent } from './components/company-officers/company-officers.component';

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' }, 
  { path: 'search', component: CompanySearchComponent },
  { path: 'company/:id', component: CompanyDetailsComponent },
  { path: 'officers/:id', component: CompanyOfficersComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

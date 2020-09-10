import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Company } from './../../models/company-model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class CompanyPProvider {

  public companySelected: Company;
  public companyList: any = [];

  private urlEndPoint: string = `${environment.urlEndPoint}/company`;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  saveCompany(): Observable<Company> {
    if (this.companySelected.id == undefined) {
      return this.http.post<Company>(this.urlEndPoint, this.companySelected, { headers: this.httpHeaders });
    } else {
      return this.http.put<Company>(`${this.urlEndPoint}/${this.companySelected.id}`, this.companySelected, { headers: this.httpHeaders });
    }
  }

  getCompanies(): any {
    return this.http.get<Observable<Company[]>>(`${this.urlEndPoint}`);
  }
}

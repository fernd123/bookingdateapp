import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from '../../models/service-model.';
import { environment } from 'src/environments/environment';


@Injectable()
export class ServicePProvider {

  public serviceSelected: Service;
  public serviceList: any = [];

  private urlEndPoint: string = `${environment.urlEndPoint}/services`;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  saveService(): Observable<Service> {
    if (this.serviceSelected.id == undefined) {
      return this.http.post<Service>(this.urlEndPoint, this.serviceSelected, { headers: this.httpHeaders });
    } else {
      return this.http.put<Service>(`${this.urlEndPoint}/${this.serviceSelected.id}`, this.serviceSelected, { headers: this.httpHeaders });
    }
  }

  getServices(): any {
    return this.http.get<Observable<Service[]>>(`${this.urlEndPoint}`);
  }

  delete(): Observable<Service> {
    return this.http.delete<Service>(`${this.urlEndPoint}/${this.serviceSelected.id}`, { headers: this.httpHeaders });
  }

  getServicesByGenre(genre: string): any {
    return this.http.get<Observable<Service[]>>(`${this.urlEndPoint}/?genre=${genre}`);
  }

  getServicesByValue(value: String): any {
    let self = this;
    if (value.length == 0) {
      this.getServices().subscribe(function (services) {
        self.serviceList = services;
      });
    } else {
      this.http.get<Observable<Service[]>>(`${this.urlEndPoint}?value=${value}`).subscribe(function (services) {
        self.serviceList = services;
      });
    }
  }

}

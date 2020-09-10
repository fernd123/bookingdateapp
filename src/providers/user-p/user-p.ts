import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class UserProvider {

  public userLoged: User;// = new User();
  public userSelected: User = new User();
  public employeeList: Observable<User[]> = null;

  private urlEndPoint: string = `${environment.urlEndPoint}/users`;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
    let self = this;

    this.getEmployees().subscribe(function (employees) {
      self.employeeList = employees;
    })
  }

  saveUser(): Observable<User> {
    if (this.userSelected.id == undefined) {
      return this.http.post<User>(this.urlEndPoint, this.userSelected, { headers: this.httpHeaders })
    } else {
      return this.http.put<User>(`${this.urlEndPoint}/${this.userSelected.id}`, this.userSelected, { headers: this.httpHeaders })
    }
  }

  create(user: User, isNew: boolean): Observable<User> {
    if (isNew)
      return this.http.post<User>(this.urlEndPoint, user, { headers: this.httpHeaders })
    else
      return this.http.put<User>(`${this.urlEndPoint}/${user.id}`, user, { headers: this.httpHeaders })
  }

  getUser(id): Observable<User> {
    return this.http.get<User>(`${this.urlEndPoint}?id=${id}`)
  }

  getUserByEmailAndPassword(email: string, password: string): Observable<User> {
    return this.http.get<User>(`${this.urlEndPoint}/${email}/${password}`);
  }

  getEmployees(): any {
    return this.http.get<Observable<User[]>>(`${this.urlEndPoint}/employees`);
  }

  getEmpoyeesByValue(value: String): void {
    let self = this;
    if (value.length == 0) {
      this.getEmployees().subscribe(function (employees) {
        self.employeeList = employees;
      });
    } else {
      this.http.get<Observable<User[]>>(`${this.urlEndPoint}?value=${value}`).subscribe(function (employees) {
        self.employeeList = employees;
      });
    }
  }

  update(user: User): Observable<User> {
    return this.http.put<User>(`${this.urlEndPoint}/${user.id}`, User, { headers: this.httpHeaders })
  }

  delete(id: number): Observable<User> {
    return this.http.delete<User>(`${this.urlEndPoint}/${id}`, { headers: this.httpHeaders })
  }
}

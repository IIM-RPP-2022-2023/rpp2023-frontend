import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { Dobavljac } from '../model/dobavljac.model';

@Injectable()
export class DobavljacService {

  private readonly API_URL = 'http://localhost:8082/dobavljac';

  dataChange: BehaviorSubject<Dobavljac[]> = new BehaviorSubject<Dobavljac[]>([]);

  constructor(private httpClient: HttpClient) {}

  public getAllDobavljac(): Observable<Dobavljac[]> {
    this.httpClient.get<Dobavljac[]>(this.API_URL).subscribe({
      next: (data) => {
        this.dataChange.next(data);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error.name + ' ' + error.message);
      }}
    );
    return this.dataChange.asObservable();
  }

  public addDobavljac(dobavljac: Dobavljac): void {
    this.httpClient.post(this.API_URL, dobavljac).subscribe();
  }

  public updateDobavljac(dobavljac: Dobavljac): void {
    this.httpClient.put(this.API_URL + dobavljac.id, dobavljac).subscribe();
  }

  public deleteDobavljac(dobavljac: Dobavljac): void {
    this.httpClient.delete(this.API_URL + dobavljac.id).subscribe();
  }
}

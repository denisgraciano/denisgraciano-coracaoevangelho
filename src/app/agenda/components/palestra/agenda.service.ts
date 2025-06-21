import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Palestra } from './palestra.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AgendaService {
    private readonly url = 'assets/palestras.json';

    constructor(private http: HttpClient) { }

    listar(): Observable<Palestra[]> {
        return this.http.get<Palestra[]>(this.url);
    }
}

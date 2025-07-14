import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Endereco {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;
}

@Injectable({
    providedIn: 'root'
})
export class CepService {

    private url = 'https://viacep.com.br/ws';

    constructor(private http: HttpClient) { }

    buscarCEP(cep: string): Observable<Endereco> {
        return this.http.get<Endereco>(`${this.url}/${cep}/json`);
    }
}
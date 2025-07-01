import { Component, OnInit } from '@angular/core';
import { PalestrasService } from '../../services/palestras.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { PalestraRealizada } from './PalestraRealizada.model';

@Component({
    selector: 'app-palestras-realizadas',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './palestras-realizadas.component.html',
    styleUrls: ['./palestras-realizadas.component.scss']

})

export class PalestrasRealizadasComponent implements OnInit {
    palestrasRealizadas: PalestraRealizada[] = [];
    carregando = true;
    erro = false;

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.carregarPalestras();
    }

    carregarPalestras(): void {
        this.http.get<PalestraRealizada[]>('assets/palestras-realizadas.json').subscribe({
            next: (data) => {
                this.palestrasRealizadas = data;
                this.carregando = false;
            },
            error: (error) => {
                console.error('Erro ao carregar palestras realizadas:', error);
                this.carregando = false;
                this.erro = true;
            }
        });
    }

    getShortUrl(url: string): string {
        // Simplifica a URL para exibição
        try {
            const urlObj = new URL(url);
            return `${urlObj.hostname}/...`;
        } catch (e) {
            return url.substring(0, 30) + '...';
        }
    }

}
import { Component, OnInit } from '@angular/core';
import { PalestrasService } from '../../services/palestras.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Temas } from './temas.model';

@Component({
    selector: 'app-palestras-realizadas',
    standalone: true,
    imports: [CommonModule],
    templateUrl: 'palestras-realizadas.component.html',
    styleUrls: ['./palestras-realizadas.component.scss']

})

export class PalestrasRealizadasComponent implements OnInit {
    temas: Temas[] = [];
    temasSelecionada: Temas | null = null;
    carregando = false;
    erro = false;

    constructor(private http: HttpClient, private palestrasService: PalestrasService) { }

    ngOnInit(): void {
        this.palestrasService.getPalestras().subscribe(data => this.temas = data);
    }

    carregarTemas(): void {
        this.http.get<Temas[]>('assets/temas.json').subscribe({
            next: (data) => {
                this.temas = data;
                this.carregando = true;

            },
            error: (error) => {
                console.error('Erro ao carregar palestras:', error);
                this.carregando = false;
                this.erro = true;
            }
        });
    }

    selecionarPalestra(temas: Temas): void {
        this.temasSelecionada = temas;
    }

}
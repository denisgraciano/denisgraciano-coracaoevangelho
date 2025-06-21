import { Component, Input } from '@angular/core';
import { AgendaService } from './agenda.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Palestra } from './palestra.model';

@Component({
    selector: 'app-agenda',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.scss']
})
export class AgendaComponent {
    palestras: Palestra[] = [];
    palestraSelecionada: Palestra | null = null;
    carregando = true;
    erro = false;

    constructor(private http: HttpClient, agendaSerice: AgendaService) { }

    ngOnInit(): void {
        this.carregarPalestras();
    }

    carregarPalestras(): void {
        this.http.get<Palestra[]>('assets/palestras.json').subscribe({
            next: (data) => {
                this.palestras = data;
                this.carregando = false;
            },
            error: (error) => {
                console.error('Erro ao carregar palestras:', error);
                this.carregando = false;
                this.erro = true;
            }
        });
    }

    selecionarPalestra(palestra: Palestra): void {
        this.palestraSelecionada = palestra;
    }
}
import { Component, Input } from '@angular/core';
import { ShareService } from './share.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-share-buttons',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './share-buttons.component.html',
    styleUrls: ['./share-buttons.component.scss']
})
export class ShareButtonsComponent {
    @Input() perguntaId: number = 0;
    @Input() perguntaTexto: string = '';
    @Input() respostaTexto: string = '';

    constructor(private shareService: ShareService) { }

    shareOnWhatsApp(): void {
        this.shareService.shareOnWhatsApp(this.getShareText());
    }

    shareOnFacebook(): void {
        this.shareService.shareOnFacebook();
    }

    shareOnTwitter(): void {
        const text = `Pergunta ${this.perguntaId} do Livro dos Espíritos: "${this.perguntaTexto.substring(0, 100)}${this.perguntaTexto.length > 100 ? '...' : ''}"`;
        this.shareService.shareOnTwitter(text);
    }

    shareByEmail(): void {
        this.shareService.shareByEmail(`Pergunta ${this.perguntaId} do Livro dos Espíritos`, this.getShareText());
    }

    private getShareText(): string {
        return `Pergunta ${this.perguntaId} do Livro dos Espíritos:\n\n"${this.perguntaTexto}"\n\nResposta:\n"${this.respostaTexto}"\n\n`;
    }
}

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-share-buttons',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="share-container">
      <p class="share-title">Compartilhar:</p>
      <div class="share-buttons">
        <button class="share-btn whatsapp" (click)="shareOnWhatsApp()" title="Compartilhar no WhatsApp">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </button>
        <button class="share-btn facebook" (click)="shareOnFacebook()" title="Compartilhar no Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
          </svg>
        </button>
        <button class="share-btn twitter" (click)="shareOnTwitter()" title="Compartilhar no Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </button>
        <button class="share-btn email" (click)="shareByEmail()" title="Compartilhar por E-mail">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 3v18h24V3H0zm21.518 2L12 12.713 2.482 5h19.036zM2 19V7.183l10 8.104 10-8.104V19H2z"/>
          </svg>
        </button>
      </div>
    </div>
  `,
  styles: [`
    .share-container {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    
    .share-title {
      font-size: 0.9rem;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }
    
    .share-buttons {
      display: flex;
      gap: 0.75rem;
      justify-content: center;
    }
    
    .share-btn {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
      color: white;
    }
    
    .share-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .share-btn:active {
      transform: translateY(-1px);
    }
    
    .whatsapp {
      background-color: #25D366;
    }
    
    .facebook {
      background-color: #1877F2;
    }
    
    .twitter {
      background-color: #1DA1F2;
    }
    
    .email {
      background-color: #DB4437;
    }
    
    @media (max-width: 767px) {
      .share-btn {
        width: 36px;
        height: 36px;
      }
      
      .share-btn svg {
        width: 20px;
        height: 20px;
      }
    }
  `]
})
export class ShareButtonsComponent {
  @Input() perguntaId: number = 0;
  @Input() perguntaTexto: string = '';
  @Input() respostaTexto: string = '';
  
  private getShareText(): string {
    return `Pergunta ${this.perguntaId} do Livro dos Espíritos:\n\n"${this.perguntaTexto}"\n\nResposta:\n"${this.respostaTexto}"\n\n`;
  }
  
  shareOnWhatsApp(): void {
    const text = this.getShareText();
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
  
  shareOnFacebook(): void {
    // Facebook não permite personalizar a mensagem diretamente via URL
    // Então compartilhamos apenas a URL do app e o usuário pode adicionar o texto
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank', 'width=600,height=400');
  }
  
  shareOnTwitter(): void {
    const text = `Pergunta ${this.perguntaId} do Livro dos Espíritos: "${this.perguntaTexto.substring(0, 100)}${this.perguntaTexto.length > 100 ? '...' : ''}"`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'width=600,height=300');
  }
  
  shareByEmail(): void {
    const subject = `Pergunta ${this.perguntaId} do Livro dos Espíritos`;
    const body = this.getShareText();
    const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }
}

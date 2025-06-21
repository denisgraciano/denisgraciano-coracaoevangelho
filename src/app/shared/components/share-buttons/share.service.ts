import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ShareService {
    shareOnWhatsApp(text: string): void {
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }

    shareOnFacebook(): void {
        const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
        window.open(url, '_blank', 'width=600,height=400');
    }

    shareOnTwitter(text: string): void {
        const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank', 'width=600,height=300');
    }

    shareByEmail(subject: string, body: string): void {
        const url = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = url;
    }
}

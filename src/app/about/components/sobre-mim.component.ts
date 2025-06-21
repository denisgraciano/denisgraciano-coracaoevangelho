import { Component, OnInit } from '@angular/core';
import { SobreMimService } from './sobre-mim.service';

@Component({
    selector: 'app-sobre-mim',
    templateUrl: './sobre-mim.component.html'
})
export class SobreMimComponent implements OnInit {
    info: any;

    constructor(private sobreMimService: SobreMimService) { }

    ngOnInit(): void {
        this.sobreMimService.getInfo().subscribe(data => this.info = data);
    }
}
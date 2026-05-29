import { Component } from '@angular/core';
import { ImagesMoldsComponent } from './images-molds/images-molds.component';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [ImagesMoldsComponent],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent { }

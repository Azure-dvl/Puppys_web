import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { Dogs, DogsAd } from '../interfaces';

@Component({
  selector: 'app-form-adoptar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './form-adoptar.component.html',
  styleUrl: './form-adoptar.component.scss'
})
export class FormAdoptarComponent {
  @Input() dog?: Dogs;
}

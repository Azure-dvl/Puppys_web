import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { FormAdoptarComponent } from '../form-adoptar/form-adoptar.component';
import { Dogs, DogsAd } from '../interfaces';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf, FormAdoptarComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() dog?: Dogs;

  selecteddog?:Dogs;
  
  ShowForm(dog:Dogs):void{
    this.selecteddog = dog;
  }
}

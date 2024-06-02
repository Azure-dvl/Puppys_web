import { Component } from '@angular/core';
import { NgFor, NgIf} from '@angular/common';

import { Dogs } from '../interfaces';
import { list_dogs } from '../list';

import { FormAdoptarComponent } from '../form-adoptar/form-adoptar.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, FormAdoptarComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  ldog = list_dogs;
  selecteddog?:Dogs;
  
  ShowForm(dog:Dogs):void{
    this.selecteddog = dog;
  }
}
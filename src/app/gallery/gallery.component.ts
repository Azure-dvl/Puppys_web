import { Component } from '@angular/core';
import { NgFor} from '@angular/common';

import { Dogs } from '../Dogs';
import { list_dogs } from '../list_dogs';

import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, DetailsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  ldog = list_dogs;
  
  states(dog:Dogs):string{
    let state:string = '';
    if(dog.estado==false){
      state='disponible';
    }else{
      state='vendido';
  }
  return state;
  }
}
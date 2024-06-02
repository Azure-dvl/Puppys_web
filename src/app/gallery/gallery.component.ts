import { Component } from '@angular/core';
import { NgFor, NgIf} from '@angular/common';

import { Dogs } from '../interfaces';
import { list_dogs } from '../list';

import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, DetailsComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  ldog = list_dogs;
  selecteddog?:Dogs;
  
  ShowDetails(dog:Dogs):void{
    this.selecteddog = dog;
  }
}
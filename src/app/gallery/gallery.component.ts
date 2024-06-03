import { Component } from '@angular/core';
import { NgFor, NgIf} from '@angular/common';
import { Router } from '@angular/router';

import { Dogs } from '../interfaces';
import { list_dogs } from '../list';

import { FormAdoptarComponent } from '../form-adoptar/form-adoptar.component';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, 
    NgIf, 
    FormAdoptarComponent
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  constructor(private router: Router) { }

  ldog = list_dogs;
  selecteddog?:Dogs;
  
  ShowForm(dog:Dogs):void{
    const data = JSON.stringify(dog);

    this.router.navigate(['/form'], {
      queryParams: {data:data}
    });
  }
}
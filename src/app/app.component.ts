import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { GalleryComponent } from './gallery/gallery.component';

import { Dogs } from './interfaces';
import { list_dogs } from './list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleryComponent, NgFor, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Puppy Web';

  dog = '';
  filtrarlist:Dogs[]=[];

  Filtrar():void{
    this.filtrarlist = list_dogs.filter(dog => dog.raza === this.dog)
  }
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { GalleryComponent } from './gallery/gallery.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GalleryComponent, SearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Puppy Web';
}

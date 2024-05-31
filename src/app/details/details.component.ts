import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

import { Dogs } from '../Dogs';
import { list_dogs } from '../list_dogs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input() dog?: Dogs;
}

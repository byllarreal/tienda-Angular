import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-headboard',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule,RouterLink],
  templateUrl: './headboard.component.html',
  styleUrl: './headboard.component.css'
})
export class HeadboardComponent {

}

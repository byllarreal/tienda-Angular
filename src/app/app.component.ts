import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeadboardComponent } from './shared/headboard/headboard.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadboardComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tienda';
}

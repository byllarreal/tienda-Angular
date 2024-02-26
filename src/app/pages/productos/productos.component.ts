import { CommonModule } from '@angular/common';
import { Component,inject} from '@angular/core';
import { ProductoServices } from '../../api/ProductoServices.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule,MatCardModule , MatButtonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  readonly productsSvs=inject(ProductoServices);
  products$=this.productsSvs.getAllProductos();
}

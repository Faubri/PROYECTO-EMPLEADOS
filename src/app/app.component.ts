import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'actividadInventario';

  isUSer = false;
  isProduct = false;

  openUsers() {
    this.isUSer = true;
    this.isProduct = false;
  }

  openProducts() {
    this.isUSer = false;
    this.isProduct = true;
  }
}

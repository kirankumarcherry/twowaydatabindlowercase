import { Component } from '@angular/core';
import {Employee} from './employee';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee = new Employee('Kiran kumar');	
	toLower(val:string) {
	  this.employee.name = val.toLowerCase();
	}
}   
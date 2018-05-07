import { Component } from '@angular/core';
import { environment} from '../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kotlin IA Web';
  environmentVar = environment;

  constructor(private router: Router) {

  }

  sendDataToNeurone() {
    console.log('Send');
  }
}

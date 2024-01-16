import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hello-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hello-task.component.html',
  styleUrl: './hello-task.component.css'
})
export class HelloTaskComponent {

  firstName: string = "";

  output() : void{
    console.log("Sveiki, " + this.firstName);
  }
}

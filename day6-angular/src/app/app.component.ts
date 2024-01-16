import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { UserInputComponent } from './user-input/user-input.component';
import { BearPictureComponent } from './bear-picture/bear-picture.component'
import { HelloTaskComponent } from './hello-task/hello-task.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    UserInputComponent, 
    BearPictureComponent,
    HelloTaskComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day6-angular';
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent implements OnInit {

  inputValue: string = "";

  constructor() {}

  ngOnInit(): void {
      
  }

  demoOut(): void{
    console.log(this.inputValue);
  }

}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-string-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './string-list.component.html',
  styleUrl: './string-list.component.css'
})
export class StringListComponent implements OnInit{
  
  index: number = -1;
  studentFirstname: string = "";

  lst: Student[] = [
    {
      firstName: "Janis",
      lastName: "Zalitis"
    },
    {
      firstName: "Juris",
      lastName: "Berzs"
    },
    {
      firstName: "Karlis",
      lastName: "Klava"
    },
    {
      firstName: "Anna",
      lastName: "Zalite"
    }
  ]

  constructor(){
    console.log("aaa2");
  }

  ngOnInit(): void {
    console.log("aaa1");
  }

  replaceName() : void{
    if(this.index > 0 && this.index < this.lst.length){
      this.lst[this.index].firstName = this.studentFirstname;
    }else{
      alert("Nepareiza ievade");
    } 
  }

}

export interface Student {
  firstName: string,
  lastName: string
}

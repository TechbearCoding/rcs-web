import { Injectable } from '@angular/core';
import { Student } from './studentinterface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

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

  constructor() { }

  getStudent() : Student[]{
    return this.lst;
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms';

import { Student } from '../studentinterface';
import { StudentService } from '../student.service';

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

  lst: Student[] = [];

  constructor(private studentService: StudentService){

  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents() : void{
    this.lst = this.studentService.getStudents();
  }

  replaceName() : void{
    if(this.index > 0 && this.index < this.lst.length){
      this.lst[this.index].firstName = this.studentFirstname;
    }else{
      alert("Nepareiza ievade");
    } 
  }

}


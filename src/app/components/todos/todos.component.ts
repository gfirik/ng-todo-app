import { isEmptyExpression } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  
  todos: Todo[]=[];
  
  inputTodo:string = "";

  constructor() { }

  ngOnInit(): void {
    this.todos=[
      {
        content: 'CB: Final Project',
        completed: false
      },
      {
        content: 'PoA: 3rd Assignment',
        completed: false
      }
    ]
  }

  toggleDone(id) {
    this.todos.map((v, i)=> {
      if(i==id) v.completed=!v.completed;
      return v;
    }) 
  }

  deleteTodo(id:number){
    this.todos= this.todos.filter((v,i)=>i !==id);
  }

  addTodo () {
    if(this.inputTodo!==""){
      this.todos.push({
        content: this.inputTodo,
        completed: false
      })
    } else {
      alert("enter a todo first!");
    }
    this.inputTodo="";
  }
  
}


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  list:any[]=[];

  ngOnInit(): void {
  }
  
  addTask(item:string){
      this.list.push({id:this.list.length,name:item});
      console.log(this.list);
  }

  removeTask(id:number){
      this.list = this.list.filter( item => item.id !== id)
  }

  namevariable = name;
  
  editTask(data:[]){

  }
}

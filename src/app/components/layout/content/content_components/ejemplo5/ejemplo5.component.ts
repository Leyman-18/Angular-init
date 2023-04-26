import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/users';

@Component({
  selector: 'app-ejemplo5',
  templateUrl: './ejemplo5.component.html',
  styleUrls: ['./ejemplo5.component.css']
})
export class Ejemplo5Component implements OnInit {
  ngOnInit(): void {

    const persona1=new Persona('Juan', 44);
    console.log(persona1)
  }

}

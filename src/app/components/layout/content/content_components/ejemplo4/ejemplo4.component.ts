import { Component, OnInit } from '@angular/core';
import { Person } from '../../../../../models/users';
import * as moment from 'moment';


@Component({
  selector: 'app-ejemplo4',
  templateUrl: './ejemplo4.component.html',
  styleUrls: ['./ejemplo4.component.css'],
})
export class Ejemplo4Component implements OnInit {
  ngOnInit(): void {

    let personas: Person = {
      id: 1,
      name: 'Jaider',
      surname: 'Quintero',
      birthday: new Date('1998-09-26'),
      work: 'Docente',
      salary: 500000,
    },

      calcularEdad = (persona: Person) => {
        let edad = moment().diff(persona.birthday, 'years');
        return edad;
      }

    console.log(personas);
    console.log(calcularEdad(personas));

  }
}
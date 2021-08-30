import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumno.model';
import { AlumnosService } from './alumnos.service';
import { Personaje } from './personajes.model';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
  styleUrls: ['./alumnos.page.scss'],
})
export class AlumnosPage implements OnInit {
  
  alumnos: Alumno[];
  personajes: Personaje[];
  constructor(private alumnosSevice: AlumnosService) { }

  ngOnInit() {
    this.alumnos = this.alumnosSevice.getAlumnos();
    this.alumnosSevice.getPersonajes().subscribe((response: any)=>{
      this.personajes = response.results;
      console.log(response);
    });
  }

  ionViewWillEnter(){
    this.alumnos = this.alumnosSevice.getAlumnos();
  }

}

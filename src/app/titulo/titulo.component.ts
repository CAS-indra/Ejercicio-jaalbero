import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  title = 'El ejercicio1 funciona';
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyectos-item',
  templateUrl: './proyectos-item.component.html',
  styleUrls: ['./proyectos-item.component.css']
})
export class ProyectosItemComponent implements OnInit {
  @Input() titulo: string="";
  @Input() lenguajes: string="";

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experiencia-item',
  templateUrl: './experiencia-item.component.html',
  styleUrls: ['./experiencia-item.component.css']
})
export class ExperienciaItemComponent implements OnInit {
@Input() empresa: string="";
@Input() puesto: string="";
@Input() periodo: string="";

  constructor() { }

  ngOnInit(): void {
  }

}

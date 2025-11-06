import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.css',
})
export class Habilidades {
  habilidades = [
    { nome: 'Angular', nivel: 50 },
    { nome: 'TypeScript', nivel: 40 },
    { nome: 'HTML/CSS', nivel: 70 },
    { nome: 'JavaScript', nivel: 35 },
    { nome: 'Node.js', nivel: 35 },
    { nome: 'Git/GitHub', nivel: 22 },
    { nome: 'python', nivel: 60 },
    { nome: 'Mysql', nivel: 60 },
    { nome: 'Java', nivel: 50 },
    { nome: 'C#', nivel: 20 }


  ];

}

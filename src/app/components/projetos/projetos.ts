import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projetos',
  standalone: true,
  imports: [CommonModule], //importação
  templateUrl: './projetos.html',
  styleUrl: './projetos.css',
})
export class Projetos {
  projetos = [
    {
      titulo: 'E-commerce PCs',
      descricao: 'Plataforma de vendas online com carrinho de compras e pagamento integrado com javaScript html e css',
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      link: 'https://github.com/CriativoCoders/e-commerce_PC'
    },
    {
      titulo: 'Projeto Canil com Node.js',
      descricao: 'Site para gerenciar pets em um canil utilizando Node.js',
      tecnologias: ['TypeScript', 'Node.js'],
      link: 'https://github.com/CriativoCoders/ProjetoCanil'
    },
  ];

}

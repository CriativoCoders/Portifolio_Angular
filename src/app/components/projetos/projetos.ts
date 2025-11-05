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
      titulo: 'E-commerce Angular',
      descricao: 'Plataforma de vendas online com carrinho de compras e pagamento integrado.',
      tecnologias: ['Angular', 'TypeScript', 'Firebase'],
      link: 'https://github.com/seu-usuario/projeto1'
    },
    {
      titulo: 'App de Tarefas',
      descricao: 'Aplicativo para gerenciar tarefas diárias com autenticação de usuários.',
      tecnologias: ['Angular', 'Node.js', 'MongoDB'],
      link: 'https://github.com/seu-usuario/projeto2'
    },
    {
      titulo: 'Dashboard Analytics',
      descricao: 'Dashboard interativo com gráficos e visualização de dados em tempo real.',
      tecnologias: ['Angular', 'Chart.js', 'API REST'],
      link: 'https://github.com/seu-usuario/projeto3'
    }
  ];

}
